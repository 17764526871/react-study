import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from './AddTodo'
import VisibleTodoList from './todoList'
import Footer from './footer'

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}






export default App;

