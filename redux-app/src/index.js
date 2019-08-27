import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import CounterContainer from './reduxInputNumber/redux'
import counter from './reduxInputNumber/reducers'

import RouterApp from './todolist/router/index'
import todos from './todolist/reducers/index'

import RouterApp1 from './reduxTrankTodoList/router/index'
import configStore from './reduxTrankTodoList/configStore'
import rootReducer from './reduxTrankTodoList/reducer/index'










// //手动实现redux
// import './reduxTest/example'
// //redux结合react
// ReactDOM.render(
//   <App></App>,
//   document.getElementById('root')
// )
// //实际使用redux计数器
// const store = createStore(counter)
// //监听
// store.subscribe(() => console.log(store.getState()))
// ReactDOM.render(
//   <Provider store={store}>
//     <CounterContainer />
//   </Provider>,
//   document.getElementById('number')
// )
// //使用redux实现todolist
// const store1 = createStore(todos)

// store1.subscribe(() => console.log(store1.getState()))

// ReactDOM.render(
//   <Provider store={store1}>
//     <RouterApp></RouterApp>
//   </Provider>,
//   document.getElementById('todulist')
// )



//使用redux router ant redux-thank axios
const store = configStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <RouterApp1></RouterApp1>
  </Provider>,
  document.getElementById('todulist1')
)

serviceWorker.unregister();
