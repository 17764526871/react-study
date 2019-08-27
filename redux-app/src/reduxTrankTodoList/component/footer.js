import React from 'react';
import { Button, Badge } from 'antd';
import { connect } from 'react-redux'
import { selectTodo } from '../action'
import Item from 'antd/lib/list/Item';



const ButtonGroup = Button.Group;
const ActiveButton = 'all'

const Footer = (props) => {
    console.log(props)
    return (
        <div className="Footer">
            <span>显示列表：</span>
            <ButtonGroup>
                <Badge count={props.todoAll}>
                    <Button
                        icon="ordered-list"
                        onClick={() => { props.todoDesc('all') }}
                        type={props.select === 'all' ? 'primary' : ''}>全部列表</Button>
                </Badge>
                <Badge count={props.todoComplete}>
                    <Button
                        icon="check-circle"
                        onClick={() => { props.todoDesc('complete') }}

                        type={props.select === 'complete' ? 'primary' : ''}>完成列表</Button>
                </Badge>
                <Badge count={props.todoActive}>
                    <Button
                        onClick={() => { props.todoDesc('active') }}
                        icon="clock-circle"
                        type={props.select === 'active' ? 'primary' : ''}>未完成列表</Button>
                </Badge>
            </ButtonGroup>
        </div>
    )
}
//set state
const mapStateToProps = (state) => {
    console.log(state)
    let todoComplete = []
    let todoActive = []
    state.todos.map((item) => {
        if (item.complete === true) {
            todoComplete.push(item)
        } else {
            todoActive.push(item)

        }
        return item
    })
    return {
        todoAll: state.todos.length,
        todoComplete: todoComplete.length,
        todoActive: todoActive.length,
        select: state.selectTodo
    }
}
//set mutation to change state
const mapDispatchToProps = (dispatch) => {
    return {
        todoDesc: (desc) => {
            dispatch(selectTodo(desc))
        }
    }
}
const DFooter = connect(mapStateToProps, mapDispatchToProps)(Footer)
export default DFooter
