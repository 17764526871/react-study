import React from 'react'
import './app.css'
// 导入子组件
import {PageHeader } from 'antd';
import AddTodo from './header'
import TodoList from './todolist'
import Footer from './footer'


const App = () => (
    <div className="todoApp">
        <PageHeader onBack={() => null} title="TodoList" subTitle="This is TodoList" />
        <AddTodo></AddTodo>
        <Footer></Footer>
        <TodoList></TodoList>
    </div>
)

export default App
