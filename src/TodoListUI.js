import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <Fragment>
      <div className="wrapper">
        <div>
          <Input
            placeholder="输入内容"
            id="insetContent"
            value={props.inputValue}
            onChange={props.handleInputChange}
          />
          <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        </div>
        <List
          bordered
          dataSource={props.getTodoItem()}
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

export default TodoListUI;