import React from 'react';
import ReactDOM from 'react-dom'

//react 列表渲染和key

//使用
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers}></NumberList>,
    document.getElementById('example8')
)


//使用key来提取组件

function ListItem(props) {
    return (
        <li>{props.value}</li>
    )
}
function NumberList1(props) {
    const listItems = props.numbers.map((val) =>
        <ListItem key={val.toString()} value={val}></ListItem>
    )
    return (
        <ul>
            {listItems}
        </ul>
    )
}

ReactDOM.render(
    <NumberList1 numbers={numbers}></NumberList1>,
    document.getElementById('example8')
)

//key在兄弟元素之间应该唯一
function Blog(props) {
    const sidebar = (
        <ul>
            {
                props.posts.map((psot) =>
                    <li key={psot.id}>
                        {psot.title}
                    </li>
                )
            }
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>)

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('example8')
);
