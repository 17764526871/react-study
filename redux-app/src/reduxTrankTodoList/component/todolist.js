import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { List, Row, Col, Tag, Empty, Switch, Icon, Button, Modal, Input ,message} from 'antd';
import { changeTodo, deleteTodo, editTodo } from '../action'

import { getTodos } from '../api/index'

const ButtonGroup = Button.Group;

const AddTodo = (props) => {

    const [state, setState] = useState(props.todos);
    const [data, setData] = useState({
        visible: false,
        inputVal: '',
    });
    const [listid,setListid] = useState('')
    const [loading,setLoading] = useState(props.isFetchLoading)

    function onChange(id) {
        props.onChangeTodo(id)

    }
    function onDeleteClick(id) {

        props.onDeleteTodo(id)
        message.success('删除成功', 1);

    }
    function onEditClick(id, index) {
        setData({
            visible: true,
            inputVal: state[index].text,
        });
        setListid(id)
    }

    function handleOk(e) {
        console.log(e);
        let text = data.inputVal
        props.onEditTodo(listid, text)

        setData({
            visible: false,
            inputVal: ''
        });

    };

    const handleCancel = e => {
        console.log(e);
        setData({
            visible: false,
            inputVal: ''
        });
    };
    const oninputChange = (e) => {
        setData({
            inputVal: e.target.value,
            visible: true
            
        })
        // console.log(e.target.value);
    }
    useEffect(() => {
        setState(props.todos);
        setLoading(props.isFetchLoading)
        console.log('state', state)
    })
    return (

        <div className="TodoListBody">
            <Modal
                title="修改名称"
                visible={data.visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input value={data.inputVal} placeholder="Basic usage" onChange={oninputChange} />
            </Modal>
            <List
                header={<div>TODOLIST</div>}
                bordered
                loading={loading}
                dataSource={state}
                renderItem={(item, i) => (
                    <List.Item>
                        {

                            item ? <Row  >
                                <Col span={2}>{i}</Col>
                                <Col span={16}>{item.text}</Col>
                                <Col span={2}>
                                    <Switch
                                        checkedChildren={<Icon type="check" />}
                                        unCheckedChildren={<Icon type="close" />}
                                        checked={item.complete}
                                        onChange={() => { onChange(item.id) }}
                                    />
                                </Col>
                                <Col span={2}>
                                    {
                                        item.complete ? <Tag color="green">已完成</Tag> : <Tag color="volcano">正在做</Tag>
                                    }

                                </Col>
                                <Col span={2}>
                                    <ButtonGroup>
                                        <Button
                                            icon="edit"
                                            size="small"
                                            onClick={() => onEditClick(item.id, i)}
                                        ></Button>
                                        <Button
                                            type="danger"
                                            icon="delete"
                                            size="small"
                                            onClick={() => { onDeleteClick(item.id) }}
                                        ></Button>
                                    </ButtonGroup>
                                </Col>
                            </Row> : <Empty />
                        }

                    </List.Item>
                )}
            />

        </div>
    )
}
const getVisibilityTodos = (filter, todos) => {
    if (filter === 'all') {
        // 所有
        return todos
    } else if (filter === 'active') {
        // 未完成
        return todos.filter(item => !item.complete)
    } else if (filter === 'complete') {
        // 完成
        return todos.filter(item => item.complete)
    } else {
        return todos
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        // 注意：合并 reducer 后，应该只将该组件中用到数据传递给该组件即可
        todos: getVisibilityTodos(state.selectTodo, state.todos),
        selectTodo: state.selectTodo,
        isFetchLoading: state.isFetchLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeTodo(id) {
            dispatch(changeTodo(id))
        },
        onDeleteTodo(id) {
            dispatch(deleteTodo(id))
        },
        onEditTodo(id, text) {
            dispatch(editTodo(id, text))
        }
    }
}

const AddTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)
export default AddTodoList
