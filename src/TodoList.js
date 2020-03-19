import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import './style.css';
import axios from 'axios';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getAjaxDataAction } from './store/actionCreator.js';
import TodoListUI from './TodoListUI.js';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // store.getState() 得到更新后的 state
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handelItemDelete = this.handelItemDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.getTodoItem = this.getTodoItem.bind(this);
    // subscribe 这个函数用来订阅 store 的变化，一旦 store 发生变化就执行回调
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        getTodoItem={this.getTodoItem}
      />
    )
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <ul key={index}>
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handelItemDelete}
          />
          {
        /*<li
          key={index}
          onClick={this.handelItemDelete.bind(this, index)}
          dangerouslySetInnerHTML={{ __html: item }}
        >
        </li> */}
        </ul>
      )
    })
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange() {
    // 将更新后的 state 存入 state 中
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handelItemDelete(index) {
    // this.setState((prevState) => {
    //   const copyList = [...prevState.list];
    //   copyList.splice(index, 1);
    //   return { list: copyList }
    // })
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  componentDidMount() { // 一般在 componentDidMount 中进行数据的请求
    axios.get('https://easy-mock.bookset.io/mock/5e6e4030d98bbe5fa3613668/api/todolist/')
      .then(res => {
        const ajaxData = res.data
        const action = getAjaxDataAction(ajaxData)
        store.dispatch(action)
      })
      .catch(() => { alert('error') })
  }
}

export default TodoList;
