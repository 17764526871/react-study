import React, { Component } from 'react';
import { connect } from 'react-redux'
import {selectTodo} from '../actions'
import {ListSelect} from '../actions'

//切换按钮
class Footer extends Component {
    constructor(props){
        super(props)
        this.state= {}

    }
    isActive(a){
        
        if(a === this.props.select){
            return 'isActive'
        }
        return ''
    }
    handleClick(desc){
        this.props.todoDesc(desc)
    }
    render() {
        let buttonStyle = {
            marginLeft: '10px',

        }
        return (
            <div>
               <span style={{fontSize:'18px',fontWeight:'700'}}>SHOW:</span> 
               <button className={this.isActive(ListSelect.SHOW_ALL)} style={buttonStyle} onClick={this.handleClick.bind(this,ListSelect.SHOW_ALL)}>显示所有</button>
               <button className={this.isActive(ListSelect.SHOW_ACTIVE)}  style={buttonStyle} onClick={this.handleClick.bind(this,ListSelect.SHOW_ACTIVE)}>未完成</button>
               <button className={this.isActive(ListSelect.SHOW_COMPLETED)}  style={buttonStyle} onClick={this.handleClick.bind(this,ListSelect.SHOW_COMPLETED)}>完成</button>
            </div>
        );
    }
}
//set state
const mapStateToProps = (state) => {
    console.log(state)
    return {
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
Footer = connect(mapStateToProps, mapDispatchToProps)(Footer)
export default Footer