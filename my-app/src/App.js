import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到我的reac项目</h2>
        </div>
        <p className="App-intro">
          这是我第一个react项目
        </p>
      </div>
    );
  }
}

export default App;
