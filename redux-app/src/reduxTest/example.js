//数据
let appState = {
    title: {
        text: 'this is title',
        color: 'red',
    },
    content: {
        text: 'this is content',
        color: 'blue'
    }
}
//渲染功能
function renderApp(appState){
    console.log('render app...')
    renderTitle(appState.title)
    renderContent(appState.content)
}

//渲染标题部分
function renderTitle(title){   
    console.log('render title...')
    const titleDom = document.getElementById('title')
    titleDom.innerText = title.text
    titleDom.style.color = title.color
}

//渲染内容部分
function renderContent(content){  
    console.log('render content...')
    const contentDom = document.getElementById('content')
    contentDom.innerText = content.text;
    contentDom.style.color = content.color;
}

//设置修改功能
// function dispatch(action) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             appState.title.text = action.text;
//             break;
//         case 'UPDATE_TITLE_COLOR':
//             appState.title.color = action.color;
//             break
//         default:
//             break
//     }
// }
//修改数据
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' })
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })

//建立store管理数据和修改方法
// function createStore(state, stateChanger) {
//     const getState = state
//     const dispatch = (action) => stateChanger(state, action)
//     return { getState, dispatch }
// }
//创建修改方法
// const store = createStore(appState,stateChanger)
// function stateChanger(state, action) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             state.title.text = action.text;
//             break;
//         case 'UPDATE_TITLE_COLOR':
//             state.title.color = action.color;
//             break
//         default:
//             break
//     }
// }
// //首次渲染
// renderApp(store.getState)
// //修改数据再次渲染
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' })
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
// renderApp(store.getState)


//改写createStore 加入观察者模式

// function createStore(state, stateChanger) {
//     const watchList = [];
//     const watchAdd = (watch) => watchList.push(watch)
//     const getState = () => state
//     const dispatch = (action) => {
//         stateChanger(state, action)
//         watchList.forEach((watch) => watch())
//     }
//     return {
//         getState,
//         dispatch,
//         watchAdd
//     }
// }
const store = createStore(appState, stateChanger)
store.watchAdd(() => renderApp(store.getState()))
renderApp(store.getState());
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'this is dispatch' })
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })

//性能优化，优化渲染方式

// //渲染app
// function renderApp(newAppState, oldAppState = {}) {
//     if(newAppState === oldAppState) return
//     renderTitle(newAppState.title, oldAppState.title)
//     renderContent(newAppState.content, oldAppState.content)
// }
// //渲染标题
// function renderTitle(newTitle, oldTitle = {}) {
//     if (newTitle === oldTitle) return
//     console.log('render title...')
//     const titleDom = document.getElementById('title')
//     titleDom.innerText = newTitle.text
//     titleDom.style.color = newTitle.color

// }
// //渲染内容
// function renderContent(newContent, oldContent) {
//     if (newContent === oldContent) return
//     console.log('render content...')
//     const contentDOM = document.getElementById('content')
//     contentDOM.innerHTML = newContent.text
//     contentDOM.style.color = newContent.color
// }

// const store = createStore(appState,stateChanger);
// let oldState = store.getState()
// store.watchAdd(()=>{
//     const newState = store.getState()
//     renderApp(newState,oldState)
//     oldState = newState
// })


//使用共享结构的对象来提高性能
function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state
    }
}
function createStore(state, stateChanger) {
    const watchList = [];
    const watchAdd = (watch) => watchList.push(watch)
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        watchList.forEach((watch) => watch())
    }
    return {
        getState,
        dispatch,
        watchAdd
    }
}
