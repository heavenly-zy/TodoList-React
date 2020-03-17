import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, AJAX_DATA } from './actionTypes.js';
const defaultState = {
    inputValue: '默认值',
    list: ["default", "value"]
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        // reducer 可以接收 state，但绝不能直接修改 state，因此这里要拷贝一份 state 的引用
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === AJAX_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(...action.value);
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1)
        return newState;
    }
    return state;
}