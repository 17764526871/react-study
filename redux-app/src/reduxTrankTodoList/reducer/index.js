// uuid 用来生产唯一不重复的id
import { v4 } from 'uuid'
import { combineReducers } from 'redux'

const data = [
    {
        id: 111,
        text: '事件1',
        complete: true
    },
    {
        id: 112,
        text: '事件2',
        complete: false
    },
    {
        id: 113,
        text: '事件3',
        complete: true
    },
    {
        id: 114,
        text: '事件4',
        complete: false
    }
];

//列表的reducer
// 任务列表的reducer
const todos = (state = data, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: v4(),
                    text: action.text,
                    complete: false
                }
            ]
        case 'DELETE_TODO':
            const result = [];
            for (let i = 0, len = state.length; i < len; i++) {
                if (state[i].id !== action.id) {
                    result.push(state[i]);
                }
            }
            return result;
        case 'EDIT_TODO':
            return state.map(item => {
                if (item.id !== action.id) {
                    console.log(action);
                    return item
                    
                }
                console.log(action)
                return {
                    ...item,
                    text: action.text
                }
            })
        case 'CHANGE_TODO':
            return state.map(item => {
                if (item.id !== action.id) {
                    return item
                }

                return {
                    ...item,
                    complete: !item.complete
                }
            })
        default:
            return state
    }
}

const requestLoading = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return true
        case 'FETCH_END':
            return false
        default:
            return state
    }
}
const selectTodo = (state = 'all', action) => {
    switch (action.type) {
        //切换显示的组
        case 'SET_VISIBILITY_FILTER':
            return action.select;
        default:
            return state
    }
}

// 参数是一个对象，对象中的每个属性都是一个reducer
// 注意：合并reducer后，传入的对象参数结构将会作为redux应用中state的结构
const rootReducer = combineReducers({
    todos,
    isFetchLoading: requestLoading,
    selectTodo: selectTodo
})

export default rootReducer