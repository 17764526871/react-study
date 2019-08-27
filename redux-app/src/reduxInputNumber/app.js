import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addFn, minusFn, addAsyn } from './index.redux'

class App extends Component {

    render() {
        const num = this.props.num
        const addFn = this.props.addFn
        const minusFn = this.props.minusFn
        const addAsyn = this.props.addAsyn
        return (
            <div className="App">
                <h1>你好吗？</h1>
                <p> {num}</p>
                <button onClick={addFn}>加1</button>
                <button onClick={minusFn}>减1</button>
                <button onClick={addAsyn}>异步加1</button>
            </div>
        );

    }

}

//num  state状态 映射到属性里面
const mapStatetoProps = (state) => {
    return { num: state }

}

//num 可以通过props获取
const actionCreators = { addFn, minusFn, addAsyn }

//addFn 自动有了dispatch的功能 onClick={addFn}
//addFn  minusFn  minusFn会被映射到props里面
//this.props.addFn 可以通过props获取
App = connect(mapStatetoProps, actionCreators)(App)

export default App;