import { useEffect, useState } from "react";

export const cleanObject = (object: any) => {
   const result = {...object};
   Object.keys(object).forEach(key => {
       const value = object[key];
       if (!isFalsy(value)) {
         delete result[key];
       }
   });
   return result;
}

export const isFalsy = (value: any) => value === 0 ? true : !!value;


// 自定义hook, without empty array
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, [])
}

// export const debounce = (func, delay) => {
//    let timeout;
//    return (...param) => {
//        if (timeout) {
//            clearTimeout(timeout)
//        }
//        timeout = setTimeout(function() {
//            func(...param);
//        }, delay)
//    }
// }

export const useDebounce = <T>(value: T, delay?:number): T => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(timeout)
    }, [value, delay]);

    return debounceValue;
}