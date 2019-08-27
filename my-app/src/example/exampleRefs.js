import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//React Refs

//使用方法
/* <input type="text" ref="myinput"/>
var input = this.refs.myinput
var inputValue = input.value;
var inputRect = input.getBoundingClientRect() */


class ExampleRef extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="myInput" />
                <button onClick={this.handleClick.bind(this)} >点我获取焦点</button>
            </div>
        );
    }
    handleClick(){
        this.refs.myInput.focus()
    }
}

ReactDOM.render(
    <ExampleRef></ExampleRef>,
    document.getElementById('example13')
)