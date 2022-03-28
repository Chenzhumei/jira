import React from 'react';
import {useState, useEffect} from 'react';
import { cleanObject, useDebounce, useMount } from '../../utils';
import { List } from "./list";  
import { SearchPanel } from "./search-panel";
import * as qs from 'qs';
import { useHttp } from '../../utils/http';
import { ScreenContainer } from '../../components/lib';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const client = useHttp();

    const debouncedParam = useDebounce(param, 1000);

    useEffect(() => {
       client('projects', {data: cleanObject(debouncedParam)}).then(setList) 
    }, [debouncedParam]);

    useMount(() => {
        client('users').then(setUsers);
     });
    return (
        <ScreenContainer>
             <h1>项目列表</h1>
            <SearchPanel users={users} param={param} setParam={setParam}/>
            <List list={list} users={users}/>
        </ScreenContainer>
    );
}