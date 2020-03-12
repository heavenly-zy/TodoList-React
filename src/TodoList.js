import React, { Component, Fragment } from 'react';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insetContent">输入</label>
          <input
            id="insetContent"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <ul>
                  <li
                    key={index}
                    onClick={this.handelItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{ __html: item }}
                  >
                  </li>
                </ul>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handelItemDelete(index) {
    console.log(this)
    const copyList = [...this.state.list]
    copyList.splice(index, 1)
    this.setState({
      list: copyList
    })
  }
}

export default TodoList;
