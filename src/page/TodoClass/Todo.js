import { Component } from "react";
import TodoList from "../../components/TodoClass/TodoList";
import "./Todo.css";
const { v4: uuidv4 } = require("uuid");
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemValue: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleShowDone = this.handleShowDone.bind(this);
    this.handleShowNotDone = this.handleShowNotDone.bind(this);
  }

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem("task"));
    if (items) {
      this.setState({
        items: items,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { itemValue } = this.state;
    console.log("submit");
    const items = JSON.parse(localStorage.getItem("task")) || [];
    if (itemValue.trim()) {
      items.push({
        id: uuidv4(),
        title: this.state.itemValue.trim(),
        isComplete: false,
      });
      this.setState({
        itemValue: "",
        items: items,
      });
      localStorage.setItem("task", JSON.stringify(items));
    }
  }

  onChange(event) {
    this.setState({
      itemValue: event.target.value,
    });
  }

  handleDone(id) {
    const newItems = this.state.items.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          isComplete: !i.isComplete,
        };
      }
      return i;
    });
    this.setState({ items: newItems });
    localStorage.setItem("task", JSON.stringify(newItems));
  }

  handleDelete(id) {
    const newItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: newItems });
    localStorage.setItem("task", JSON.stringify(newItems));
  }

  handleShowDone() {
    const itemsOrigin = JSON.parse(localStorage.getItem("task"));
    const itemDone = [];
    // const show = this.state.show;

    itemsOrigin.forEach((item) => {
      if (item.isComplete === true) {
        itemDone.push(item);
      }
      this.setState({
        items: itemDone,
      });
    });
  }
  handleShowNotDone() {
    const itemsOrigin = JSON.parse(localStorage.getItem("task"));
    const items = [];

    itemsOrigin.forEach((item) => {
      if (item.isComplete === false) {
        items.push(item);
      }
      this.setState({
        items: items,
      });
    });
  }

  handleShowAll() {
    const items = JSON.parse(localStorage.getItem("task"));
    this.setState({
      items: items,
    });
  }
  render() {
    const { items, itemValue } = this.state;
    return (
      <div className="Todo">
        <div className="text-center">Todo</div>
        <form onSubmit={this.handleSubmit}>
          <div className="button-todo">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handleShowAll}
            >
              Show all
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handleShowDone}
            >
              Show done
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handleShowNotDone}
            >
              Show not done
            </button>
          </div>
          <div className="main-todo">
            <div className="header">
              <input
                type="text"
                placeholder="Add a new item"
                value={itemValue}
                onChange={this.onChange}
              />
            </div>
          </div>
        </form>
        {items
          ? items.map((item, index) => (
              <TodoList
                key={index}
                item={item}
                onClickDone={this.handleDone}
                onClickDelete={this.handleDelete}
              />
            ))
          : null}
      </div>
    );
  }
}

export default Todo;
