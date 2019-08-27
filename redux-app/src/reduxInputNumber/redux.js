import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

//创建store 




class Counter extends Component {

    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        count: state
    }
}
// 将修改redux数据的方法，映射到 props 中
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => { dispatch(increment(1)) },
        onDecrement: () => { dispatch(decrement(1)) },
    }
}


const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer