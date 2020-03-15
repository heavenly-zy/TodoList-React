import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 下一次传递过来的 prop 不同时才会重新执行 render()
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('child render')
    const { content } = this.props
    return (
      <li onClick={this.handleClick}>{content}</li>
    )
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index)
  }
}

export default TodoItem;
