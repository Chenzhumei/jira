import React from 'react';
import {useState, useEffect} from 'react';
import { cleanObject, useDebounce, useMount } from '../../utils';
import { List, Project } from "./list";  
import { SearchPanel } from "./search-panel";
import { useHttp } from '../../utils/http';
import { ScreenContainer } from '../../components/lib';
import { Typography } from 'antd';
import { useAsync } from './use-async';

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [users, setUsers] = useState([]);
   
    const client = useHttp();

    const {run, isLoading, error, data: list} = useAsync<Project[]>()

    const debouncedParam = useDebounce(param, 1000);

    useEffect(() => {
       run(client('projects', {data: cleanObject(debouncedParam)}))
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedParam]);

    useMount(() => {
        client('users').then(setUsers);
     });
    return (
        <ScreenContainer>
             <h1>项目列表</h1>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            {error ? <Typography.Text type='danger'>{error.message}</Typography.Text>:null}
            <List dataSource={list || []} users={users} loading={isLoading}/>
        </ScreenContainer>
    );
}