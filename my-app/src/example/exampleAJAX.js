// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

//ReactAJAX
//ajax实例

// class UserGist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             lastGistUrl: ''
//         }
//         this.componentDidMount = this.componentDidMount.bind(this);
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.userName} 用户最新的Gist共享地址
//                 <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
//             </div>
//         );
//     }
//     componentDidMount(){
//         var that = this;
//         //ajax请求
//         this.serverRequest = $.ajax({
//             url: this.props.source, 
//             type:"GET",
//             dataType: 'jsonp',
//             success: function (result) {
//                 console.log(result.data);
//                 var lastGist = result.data[0];
//                 //此处的上下文发生改变，this的指针指向发生了变化，通过上述定义的that来操作
//                 that.setState({
//                     username: lastGist.owner.login,
//                     lastGistUrl: lastGist.html_url
//                 })
//             }
//         })
//     }
//     componentWillUnmount(){
//         this.serverRequest.abort()
//     }
// }
// ReactDOM.render(
//     <UserGist source="https://api.github.com/users/octocat/gists" />,
//     document.getElementById('example11')
//   );