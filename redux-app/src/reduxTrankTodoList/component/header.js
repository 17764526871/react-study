import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd';
import { addTodoAsync } from '../action'

const { Search } = Input;

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (

            <div className="TodoHeader">
                <Search
                    placeholder="输入你要做的事情"
                    enterButton="添加"
                    value={this.state.inputValue}
                    size="large"
                    onChange={this.onChange}
                    onSearch={(value) => {
                        if (value.trim() === '') {
                            return
                        }
                        this.props.onAddTodo(value.trim())
                        this.setState({inputValue:''})
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
    return {
        // todoName 参数：表示文本框的值
        onAddTodo(todoName) {
            dispatch(addTodoAsync(todoName))
        }
    }
}

// connect方法的参数：
// 第一个参数：用来将 redux 中的state映射到组件中
// 第二个参数：用来将 操作state的方法 映射到组件中
const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)
export default AddTodoContainer
