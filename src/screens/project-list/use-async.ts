import { useState } from "react";

export interface State<D> {
    error: Error | null;
    data: D | null;
    stat: 'idle' | 'loading' | 'error' | 'success';
}

const defaultInitalState: State<null> = {
    stat: 'idle',
    data: null,
    error: null
}

export const useAsync = <D>(initialState?: State<D>) => {
    const [state, setState] = useState<State<D>>({
        ...defaultInitalState,
        ...initialState
    })

    const setData = (data: D) => setState({
        data,
        stat: 'success',
        error: null
    })

    const setError = (error: Error) => setState({
        error,
        stat: 'success',
        data: null
    })
    // 触发异步请求
    const run = (promise: Promise<D>) => {
          if (!promise || !promise.then) {
              throw new Error('请输入Promise类型')
          }
          setState({...state, stat:'loading'});
          return promise
          .then(data => {
              setData(data);
              return data;
          })
          .catch(error => {
              setError(error);
              return Promise.reject(error);
          })
    }

    return {
        isIdle: state.stat === 'idle',
        isLoading: state.stat === 'loading',
        isError: state.stat === 'error',
        isSuccess: state.stat === 'success',
        run,
        setData,
        setError,
        ...state
    }
}