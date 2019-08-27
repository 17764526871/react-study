const todos = (state = [], action) => {
    switch (action.type) {
        //添加新的事情
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        //点击事情切换完成或未完成
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })
        

        default:
            return state
    }
}

export default todos