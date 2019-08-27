import React from 'react';
import ReactDOM from 'react-dom';


//react元素渲染
// const element = <h1>Hello, world!</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('example1')
// );
//react 元素更新
//写法1
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(
//       element,
//       document.getElementById('example1')
//     );
//   }
//通过 setInterval() 方法，每秒钟调用一次 ReactDOM.render()。
// setInterval(tick, 1000);

//写法二
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello,world</h1>
//             <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
//         </div>

//     )
// }
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()}></Clock>,
//         document.getElementById('example1')
//     );
// }
// //通过 setInterval() 方法，每秒钟调用一次 ReactDOM.render()。
// setInterval(tick, 1000);

//写法三
class Clock extends React.Component{
    render(){
        return (
            <div>
                <h1>模拟渲染</h1>
                <h2>现在是{this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

function tick (){
    ReactDOM.render(
        <Clock date={new Date()}></Clock>,
        document.getElementById('example1')
    )
}
setInterval(tick, 1000);