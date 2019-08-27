// 路由：
import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'
import App from '../component/app';

class RouterApp extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App} />
            </Router>
        );
    }
}

export default RouterApp;