import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem.js';
import './style.css';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // store.getState() 得到更新后的 state
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handelItemDelete = this.handelItemDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // subscribe 这个函数用来订阅 store 的变化
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div>
            <Input
              placeholder="输入内容"
              id="insetContent"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
          </div>
          <List
            bordered
            dataSource={this.getTodoItem()}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
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
          {/*<li
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
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleStoreChange() {
    // 将更新后的 state 存入 state 中
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
  handelItemDelete(index) {
    this.setState((prevState) => {
      const copyList = [...prevState.list];
      copyList.splice(index, 1);
      return { list: copyList }
    })
  }

  componentDidMount() { // 一般在 componentDidMount 中进行数据的请求
    axios.get('https://easy-mock.bookset.io/mock/5e6e4030d98bbe5fa3613668/api/todolist/')
      .then(res => {
        const ajaxData = res.data
        const action = {
          type: 'ajax_data',
          value: ajaxData
        }
        store.dispatch(action)
      })
      .catch(() => { alert('error') })
  }
}

export default TodoList;
