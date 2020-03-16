import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem.js';
import './style.css';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input, Button, List, Typography } from 'antd';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handelItemDelete = this.handelItemDelete.bind(this)
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
    // 新版 React 推荐写法
    const value = e.target.value
    this.setState(() => {
      return { inputValue: value }
    })
    // 旧版写法
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleBtnClick() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    })
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
        this.setState(() => ({
          list: [...res.data]
        }))
      })
      .catch(() => { alert('error') })
  }
}

export default TodoList;
