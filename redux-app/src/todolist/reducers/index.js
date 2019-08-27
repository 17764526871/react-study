
import { combineReducers } from 'redux'
import todos from './todos'
import selectTodo from './electTodo'

export default combineReducers({
  todos,
  selectTodo
})
