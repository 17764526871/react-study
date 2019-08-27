import axios from 'axios'


// 加载中
export const fetchStart = () => ({
    type: 'FETCH_START'
})
// 加载完成
export const fetchEnd = () => ({
    type: 'FETCH_END'
})

// 添加任务
export const addTodo = text => ({
    type: 'ADD_TODO',
    text
})
// 删除任务
export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})
// 修改任务
export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    id,
    text
})


export const addTodoAsync = text => {
    return (dispatch, getState) => {
        console.log('Async: ', getState())
        if (getState().isFetchLoading) {
            return
        }
        dispatch(fetchStart())
        setTimeout(() => {
            dispatch(fetchEnd())
            dispatch(addTodo(text))
        }, 2000)
    }
}

// 切换任务状态
export const changeTodo = id => ({
    type: 'CHANGE_TODO',
    id
})

// 显示不同状态的任务
export const selectTodo = select => ({
    type: 'SET_VISIBILITY_FILTER',
    select
})
