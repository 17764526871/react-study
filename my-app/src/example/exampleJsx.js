import React from 'react';
import ReactDOM from 'react-dom';

//使用jsx
ReactDOM.render(
    <h1>这是jsx使用方法</h1>,
    document.getElementById('example2')
)
//嵌套多个标签
ReactDOM.render(
    <div>
        <h1>标题</h1>
        <h2>欢迎观看</h2>
        <p data-myattribute="somevalue">这是一个很不错的jsx</p>
    </div>,
    document.getElementById('example2')
)

//javaScript表达式
//{}中可以使用js表达式
ReactDOM.render(
    <div>
        <h1>{1+1}</h1>
    </div>,
    document.getElementById('example2')
    
)
//样式写法
//内联样式的写法注意<h1 style = {{fontSize:12}}>内联样式</h1>
let myStyle ={
    fontSize:100,
    color:'#ccc'
};
ReactDOM.render(
    <h1 style={myStyle}>这是样式测试</h1>,
    document.getElementById('example2')
)
//注释要写在{}里面
// 1、在标签内部的注释需要花括号

// 2、在标签外的的注释不能使用花括号
ReactDOM.render(
    /* 注释 */
    <div>
        <h1>注释测试</h1>
        {/* 这是注释 */}
    </div>,
    document.getElementById('example2')
)

//数组
//jsx允许在模板中插入数组，数组会自动展开所有成员
let arr =[
    <h1 key="1">这是第一个标签</h1>,
    <h2 key="2">这是第二给标签</h2>,
    <h3 key="3">这是第三个标签</h3>
]
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('example2')
)


//jsx仅仅只是react.createElement()函数语法糖
/* <MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton> */
// React.createElement(
//     MyButton,
//     {color: 'blue', shadowSize: 2},
//     'Click Me'
//   )
