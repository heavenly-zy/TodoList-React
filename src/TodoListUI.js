import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <div>
            <Input
              placeholder="输入内容"
              id="insetContent"
              value={this.props.inputValue}
              onChange={this.props.handleInputChange}
            />
            <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
          </div>
          <List
            bordered
            dataSource={this.props.getTodoItem()}
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
}

export default TodoListUI;