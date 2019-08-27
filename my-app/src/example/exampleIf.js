import React, { Component } from 'react';
import ReactDOM from 'react-dom'

//react条件渲染


function UserGreeting(props) {
    return <h1>欢迎回来!</h1>;
}

function GuestGreeting(props) {
    return <h1>请先注册。</h1>;
}
//渲染其中一个
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting></UserGreeting>
    }
    return <GuestGreeting></GuestGreeting>
}
ReactDOM.render(
    <Greeting isLoggedIn={false}></Greeting>,
    document.getElementById('example7')
)

//元素变量
class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleLogout() {
        this.setState({
            isLoggedIn: false
        })
    }
    handleLogin() {
        this.setState({
            isLoggedIn: true
        })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <button onClick={this.handleLogout}>点击登出</button>
        } else {
            button = <button onClick={this.handleLogin}>点击登录</button>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}></Greeting>
                {button}
            </div>
        );
    }
}
ReactDOM.render(
    <LoginControl />,
    document.getElementById('example7')
);

//运算符&&
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    您有 {unreadMessages.length} 条未读信息。
          </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('example7')
);

//三元运算符
// render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         {isLoggedIn ? (
//           <LogoutButton onClick={this.handleLogoutClick} />
//         ) : (
//           <LoginButton onClick={this.handleLoginClick} />
//         )}
//       </div>
//     );
//   }


//阻止组件渲染
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div >
            警告!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? '隐藏' : '显示'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('example7')
);