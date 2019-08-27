// {
//     id :0,
//     text:'',   
//     completed:false
// }
let nextTodoId = 0
export const addTodo = (text) => {

    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const changeTodo = (id) => {

    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const selectTodo = (select) => {

    return {
        type: 'SET_VISIBILITY_FILTER',
        select
    }
}

export const ListSelect = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}