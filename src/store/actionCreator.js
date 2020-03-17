import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, AJAX_DATA } from './actionTypes.js';

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

