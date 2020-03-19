import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';

// 同时使用 redux-devtools-extension 和 redux-thunk 两个中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

export default store;