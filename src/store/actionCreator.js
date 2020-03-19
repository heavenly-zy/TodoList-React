import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, AJAX_DATA } from './actionTypes.js';
import axios from 'axios';

export const getInputChangeAction = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
};

export const getAddItemAction = () => {
    return {
        type: ADD_TODO_ITEM
    }
};

export const getDeleteItemAction = (value) => {
    return {
        type: DELETE_ITEM,
        value
    }
};

export const getAjaxDataAction = (value) => {
    return {
        type: AJAX_DATA,
        value
    }
};

export const getTodoList = () => {
    return (dispatch) => { // 返回一个函数
        axios.get('https://easy-mock.bookset.io/mock/5e6e4030d98bbe5fa3613668/api/todolist/')
            .then(res => {
                const ajaxData = res.data
                const action = getAjaxDataAction(ajaxData)
                dispatch(action)
            })
            .catch(() => { alert('error') })
    }
}