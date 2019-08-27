import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//react事件处理
//一般写法
/* <button onClick={buttonClick}>
    激活按钮
</button> */

// 事件组价
class MethodComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickTime:0
        }
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.ButtonClick =this.ButtonClick.bind(this)
    }
    render() {
        return ( 
          <button onClick={this.ButtonClick}>
              点击按钮次数{this.state.clickTime}
          </button>  
        );
    }
    ButtonClick(){
        this.setState({
            clickTime:this.state.clickTime+1
        })
    }
}
ReactDOM.render(
    <MethodComp></MethodComp>,
    document.getElementById('example6')
)

//属性初始化器
//不传参
// class Hello extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             content:true
//         }
//     }
    
//     change=()=>{
//         this.setState({
//             content:!this.state.content
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <h1>{this.state.content ? '1':'2'}</h1>
//                 <h2>{this.props.name}</h2>
//                 <button onClick={this.change}>
//                     点击
//                 </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Hello name="Hello"/>,
//     document.getElementById('example')
// )

//传参
class Hello extends Component{
    constructor(){
        super()
        this.state = {
            content:true
        }
    }
    
    change = (arr)=>{
        this.setState({
            content:!this.state.content
        })
        console.log(arr)
    }

    render(){
        return (
            <div>
                <h1>{this.state.content ? '1':'2'}</h1>
                <h2>{this.props.name}</h2>
                <button onClick={this.change.bind(this,2)}>
                    点击
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Hello name="Hello"/>,
    document.getElementById('example6')
)