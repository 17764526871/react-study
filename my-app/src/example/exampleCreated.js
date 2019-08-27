import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//react组件生命周期

//组件的生命周期分为三个状态，mounting：已经插入真实dom updating：正在被重新渲染 ynmounting：已移除真实dom

// 生命周期的方法
// componentWillMount 在渲染前调用
// componentDidMount 在第一次渲染之后调用
// componentWillReceiveProps 在组件接收到一个新props时被调用
// shouldComponentUpdate 返回一个布尔值，在组件接收到新的props或者state时被调用
// componentWillUpdate 在组件接收到新的props或者state但还没有render时调用
// componentDidUpdate 在组价完成更新后调用
// componentWillUnmount 在组件从dom中移除之前立刻调用

//实际使用
class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { opacity: 1 }
    }
    render() {
        return ( 
            <div style={{opacity:this.state.opacity}}>
                hello{this.state.name}
            </div>
         );
    }
    componentDidMount(){
        this.trimer = setInterval(function(){
            var opacity = this.state.opacity
            opacity -= 0.5;
            if(opacity<0.1){
                opacity = 1;
            }
            this.setState({
                opacity: opacity,
            })

        }.bind(this),1000)
    }

}

// ReactDOM.render(
//     <Hello></Hello>,
//     document.getElementById('example10')
// )

//
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { data:0 }
        this.setNewNumber = this.setNewNumber.bind(this)
    }
    render() { 
        return ( 
            <div>
                <button onClick = {this.setNewNumber}>按钮</button>
                <Content myNumber = {this.state.data}></Content>
                
            </div>
         );
    }
    setNewNumber(){
        this.setState(
            {data:this.state.data +1}
        )
    }
}
class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
         console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
          console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
          return true;
    }
    componentWillUpdate(nextProps, nextState) {
          console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
          console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
           console.log('Component WILL UNMOUNT!')
    }
   
      render() {
        return (
          <div>
            <h3>{this.props.myNumber}</h3>
          </div>
        );
      }
  }
 
ReactDOM.render(
    (
        <div>
            <Button></Button>
        </div>
    ),
    document.getElementById('example10')
)
