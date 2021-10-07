import classNames from 'classnames';
import React, { Component } from 'react';
import './TodoList.css';

export default class TodoList extends Component {
  render() {
    const { item, onClick } = this.props;
    return(
      <div onClick={onClick} className={classNames('TodoItem', {
        'TodoItem-complete' : item.isComplete
      })}>
        <span>{this.props.item.number}</span>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}