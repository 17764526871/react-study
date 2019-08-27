import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo, } from '../actions'
//添加事件
class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.textInput = React.createRef();
        this.handleClick = this.handleClick.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }
    handleClick() {
        if(!this.state.value){
            return
        }
        this.props.setValue(this.state.value)
    }
    inputChange() {
        let newVal = this.textInput.current.value.trim()
        this.setState({
            value: newVal
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    ref={this.textInput}
                    onChange={this.inputChange} />
                <button onClick={this.handleClick}>Add Todo</button>
            </div>
        );
    }
}
//获取state

//修改dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        setValue: (value) => {
            dispatch(addTodo(value))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)