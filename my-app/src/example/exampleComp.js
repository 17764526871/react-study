import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//react组件
function HelloMessage(props) {
    return <h1>react组件</h1>;
}

//用class来定义一个组件
class Welcome extends React.Component {
    render() {
        return <h1>class来定义一个组件</h1>
    }
}

ReactDOM.render(
    <div>
        <HelloMessage></HelloMessage>
        <Welcome></Welcome>
    </div>,
    document.getElementById('example3')
)

//组件传参
function HelloMessage1(props) {
    return <h1>传的参数{props.name}</h1>

}
const element = <HelloMessage1 name="jack"></HelloMessage1>;

ReactDOM.render(
    element,
    document.getElementById('example3')
)

//注意，在添加属性时， class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。

//复合组件
function Name(props) {
    return <h1>他的名称是{props.name}</h1>
}
function Age(props) {
    return <h1>他的年龄是{props.age}</h1>
}
function Weight(props) {
    return <h1>他的体重是{props.weight}</h1>
}
function Man(props) {
    return (
        <div>
            <Name name={'jack'}></Name>
            <Age age="18"></Age>
            <Weight weight={props.weight}></Weight>
        </div>
    );
}
ReactDOM.render(
    <Man weight={120}></Man>,
    document.getElementById('example3')
)

//修改版本。通过this来调用参数
class Name1 extends Component {
    render() {
        return (<h1>他的名称是{this.props.name}</h1>);
    }
}
class Age1 extends Component {
    render() {
        return (<h1>他的年龄是{this.props.age}</h1>);
    }
}
class Weight1 extends Component {
    render() {
        return (<h1>他的体重是{this.props.weight}</h1>);
    }
}
class Man1 extends Component {

    render() {
        return (
            <div>
                {this.props.title}
                <Name1 name={'jack'}></Name1>
                <Age1 age="18"></Age1>
                <Weight1 weight={this.props.weight}></Weight1>
            </div>);
    }
}
ReactDOM.render(
    <Man1 weight={120} title="这是标题"></Man1>,
    document.getElementById('example3')
)


