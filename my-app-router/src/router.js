import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
    render() { 
        return ( 
            <Router>
                <div>
                    <h1>使用router路由</h1>
                    <Link to="/home">首页</Link>
                    <Link to="/detail">详情页</Link>
                    <Route exact path="/" component={Home} />
                    <Route  exact path="/home" component={Home}></Route>
                    <Route exact path="/detail" component={Detail}></Route>
                </div>
            </Router>
        );
    }
}
 
export default App;
