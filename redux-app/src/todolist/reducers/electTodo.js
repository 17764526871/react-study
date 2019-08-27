const selectTodo = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    //切换显示的组
    case 'SET_VISIBILITY_FILTER':
      return action.select;
    default:
      return state
  }
}

export default selectTodo
