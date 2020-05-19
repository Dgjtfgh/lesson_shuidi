import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import { List } from "antd"
import TodoItem from "./TodoItem";

// 前端定义他要的接口是什么 前端决定权 
// graphql 查询参数  
// /posts/:1,  GET axios 
// 接口语言
const QUERY_TODO = gql`
  {
    TodoList{
      content
      id
      checked
    }
  }
`


const TodoList = () => (
    <Query
        query={QUERY_TODO}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>error...</p>;
            return (
                <List
                    dataSource={data.TodoList}
                    itemLayout="vertical"
                    renderItem={(item) => <TodoItem data={item} />}
                />
            )
            // return <li></li>

        }}
    </Query>
)


export default TodoList;