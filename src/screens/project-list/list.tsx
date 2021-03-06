import { Table,  } from 'antd';
import { TableProps } from 'antd/lib/table';
import React from 'react';
import {User} from './search-panel'


export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project> {
    users: User[];
}

export const List = ({users, ...props}: ListProps) => {
    return <Table pagination={false} columns={[
        {
           title:'名称',
           dataIndex: 'name',
           sorter: (a,b) => a.name.localeCompare(b.name)
        },
        {
            title:'部门',
            dataIndex: 'organization'
         },
        {
            title:'负责人',
            render(value, project) {
                return <span>
                    {users.find(user => user.id === project.personId)?.name}
                </span>
            }
         },
         {
            title: "创建时间",
            render(value, project) {
              return (
                <span>
                  {project.created }    
                </span>
              );
            }
        },
    ]} {...props}/>
}