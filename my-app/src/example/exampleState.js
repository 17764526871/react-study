import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//react state 状态
class ClockState extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    render() {
        return (
            <div>
                <h1>这是state状态</h1>
                <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <ClockState></ClockState>,
    document.getElementById('example4')
)

//实时更新state
class ClockState1 extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    render() {
        return (<div>
            <h1>这是state状态</h1>
            <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
        </div>);
    }
}

ReactDOM.render(
    <ClockState1></ClockState1>,
    document.getElementById('example4')
)

//父子组件传参
function ChildrenComp(props) {
    return (
        <h2>这是子组件，现在时间是{props.date.toLocaleTimeString()}</h2>
    )
};
class ClockState2 extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    render() {
        return (
            <div>
                <ChildrenComp date={this.state.date}></ChildrenComp>
            </div>
        );
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.timerID3 = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID3)
    }
}

ReactDOM.render(
    <ClockState2></ClockState2>,
    document.getElementById('example4')
)

//组件的多次渲染
function NewComp(props) {
    return <h2>现在是 {props.date.toLocaleTimeString()}</h2>
};

class ClockState3 extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    render() {
        return (
            <div>
                <h1>这是state状态</h1>
                <NewComp date={this.state.date}></NewComp>
            </div>
        );
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        this.timerID2 = setInterval(
          () => this.tick(),
          1000
        );
      }
     
      componentWillUnmount() {
        clearInterval(this.timerID2);
      }
    

    
}
function App(){
    return (
        <div>
            <ClockState3></ClockState3>
            <ClockState3></ClockState3>
            <ClockState3></ClockState3>
        </div>
    )
};
ReactDOM.render(
    <App></App>,
    document.getElementById('example4')
)




