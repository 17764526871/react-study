import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTodo } from '../actions'


//事件列表
class VisibleTodoList extends Component {
    constructor() {
        super()
        this.state = {
            todoList: [
                {
                    id: 1,
                    text: '1',
                    complete: false
                }
            ]

        }
    }
    handleClick(val) {
        console.log(val);
        this.props.toggleTodo(val)

    }
    render() {
        let list = this.props.todoList
        console.log(list);
        console.log(this.props.select)

        switch (this.props.select) {
            case 'SHOW_COMPLETED':

                list = list.filter(t => {
                    return t.completed
                })
                break;
            case 'SHOW_ACTIVE':
                list = list.filter(t => {
                    return !t.completed
                })
                break;
            case 'SHOW_ALL':
            default:
            // return list/
        }
        return (
            <div>
                <ul>
                    {
                        list.map((todo) =>
                            <li
                                key={todo.id}
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}
                                onClick={this.handleClick.bind(this, todo.id)}>
                                {todo.text}
                            </li>
                        )
                    }

                </ul>
            </div>
        );
    }
}
//set state
const mapStateToProps = (state) => {
    console.log(state)
    return {
        todoList: state.todos,
        select: state.selectTodo
    }
}
//set mutation to change state
const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(changeTodo(id))
        }
    }
}
VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
export default VisibleTodoList