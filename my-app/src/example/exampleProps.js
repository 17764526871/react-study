import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

//react props
//使用props

function ExampleProps(props) {
    return <h1>这是props{props.name}</h1>
}
const elProps = <ExampleProps name="这里是值"></ExampleProps>;

ReactDOM.render(
    elProps,
    document.getElementById('example5')
)

//默认props
class ExampleProps2 extends Component {
    render() {
        return (<h1>这是props{this.props.name}</h1>);
    }
}
ExampleProps2.defaultProps = {
    name: '这是值'
};
const elProps2 = <ExampleProps2></ExampleProps2>;
ReactDOM.render(
    elProps2,
    document.getElementById('example5')
)

//state和props
class ExampleProps3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'jack',
            age: 18
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name}></Name>
                <Age age={this.state.age}></Age>
            </div>
        );
    }
}
class Name extends Component {
    render() {
        return (<h1>他的名字是{this.props.name}</h1>);
    }
};

class Age extends Component {
    render() {
        return (<h1>他的年龄是{this.props.age}</h1>);
    }
}
ReactDOM.render(
    <ExampleProps3></ExampleProps3>,
    document.getElementById('example5')
)

//props验证
let title = "props验证";
class MyTitle extends Component {
    render() {
        return (<h1>这是标题{this.props.title}</h1>);
    }
}
MyTitle.propTypes = {
    title: PropTypes.string
};

ReactDOM.render(
    <MyTitle title={title}></MyTitle>,
    document.getElementById('example5')
)
// const MyComponent = {}
// MyComponent.propTypes = {
//     // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
//    optionalArray: React.PropTypes.array,
//     optionalBool: React.PropTypes.bool,
//     optionalFunc: React.PropTypes.func,
//     optionalNumber: React.PropTypes.number,
//     optionalObject: React.PropTypes.object,
//     optionalString: React.PropTypes.string,

//     // 可以被渲染的对象 numbers, strings, elements 或 array
//     optionalNode: React.PropTypes.node,

//     //  React 元素
//     optionalElement: React.PropTypes.element,

//     // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
//     optionalMessage: React.PropTypes.instanceOf(Message),

//     // 用 enum 来限制 prop 只接受指定的值。
//     optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

//     // 可以是多个对象类型中的一个
//     optionalUnion: React.PropTypes.oneOfType([
//       React.PropTypes.string,
//       React.PropTypes.number,
//       React.PropTypes.instanceOf(Message)
//     ]),

//     // 指定类型组成的数组
//     optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

//     // 指定类型的属性构成的对象
//     optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

//     // 特定 shape 参数的对象
//     optionalObjectWithShape: React.PropTypes.shape({
//       color: React.PropTypes.string,
//       fontSize: React.PropTypes.number
//     }),

//     // 任意类型加上 `isRequired` 来使 prop 不可空。
//     requiredFunc: React.PropTypes.func.isRequired,

//     // 不可空的任意类型
//     requiredAny: React.PropTypes.any.isRequired,

//     // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
//     customProp: function(props, propName, componentName) {
//       if (!/matchme/.test(props[propName])) {
//         return new Error('Validation failed!');
//       }
//     }

// }

// 父子组件传参

class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fatherName: 'jack',
            childrenSay:''
        }
    }
    render() {
        return (
            <div>
                <h1>这是父子组件传参</h1>
                <p>这是儿子对父亲说的话{this.state.childrenSay}</p>
                <Children getName={this.state.fatherName} changeCall={this.changeCall.bind(this)}></Children>


            </div>
        );
    }
    changeCall(event){
        this.setState({childrenSay:event.target.value})
    }
}

class Children extends Component {
    render() {
        return (
            <div>
                <p>父亲的名字是{this.props.getName}</p>
                <p>
                    儿子告诉父亲说： <input type="text"  onChange={this.props.changeCall} />
                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <Father></Father>,
    document.getElementById('example5')
)

