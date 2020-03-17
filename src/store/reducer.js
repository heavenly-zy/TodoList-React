const defaultState = {
    inputValue: '默认值',
    list: ["default", "value"]
}

export default (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        // reducer 可以接收 state，但绝不能直接修改 state，因此这里要拷贝一份 state 的引用
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'ajax_data'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(...action.value);
        return newState;
    }
    if(action.type === 'delete_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1)
        return newState;
    }
    return state;
}