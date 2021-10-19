import React, { Component } from "react";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    this.props.onClickDelete(id);
  }

  onComplete(id) {
    this.props.onClickDone(id);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="TodoItem">
        <p
          className={
            item.isComplete ? "TodoItem-complete" : "TodoItem-noComplete"
          }
        >
          {this.props.item.title}
        </p>
        <div>
          <button
            onClick={() => this.onComplete(item.id)}
            className="btn btn-outline-info complete"
          >
            Done
          </button>
          <button
            onClick={() => this.onComplete(item.id)}
            className="btn btn-outline-info complete"
          >
            Edit
          </button>
          <button
            onClick={() => this.onDelete(item.id)}
            className="btn btn-outline-info delete-item"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
