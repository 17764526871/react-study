import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import Header from './reduxTest/Header';
import Content from './reduxTest/Content';
import './App.css';
import createStore from './reduxTest/store'
import themeReducer from './reduxTest/reducer'

const store = createStore(themeReducer)

class App extends Component {
  static childContextTypes ={
    store:PropTypes.object
  }
  getChildContext(){
    return { store}
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    );
  }
}

export default App;




