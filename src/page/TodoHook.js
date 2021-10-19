import React, { useState } from "react";
import TodoList from "../components/TodoHook";
import useLocalStorage from "../hook/useLocalStorage";
import "./Todo.css";
const { v4: uuidv4 } = require("uuid");

function TodoHook() {
  const [todoList, setTodoList] = useLocalStorage("task", []);
  const [value, setValue] = useState("");
  const [showTodo, setTodo] = useState(todoList);

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim()) {
      const newTodo = {
        title: value.trim(),
        id: uuidv4(),
        isComplete: false,
      };
      setTodoList([...todoList, newTodo]);
      setTodo([...todoList, newTodo]);
      setValue("");
    }
  }
  function handleDone(id) {
    const newItems = todoList.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          isComplete: !i.isComplete,
        };
      }
      return i;
    });
    setTodoList(newItems);
    setTodo(newItems);
  }

  function handleDelete(id) {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
    setTodo(newTodo);
  }

  function handleEdit(item, id) {
    const newTodo = [...todoList];
    newTodo.forEach((todo, index) => {
      if (index === id) {
        todo.title = item;
      }
      console.log(index.id);
    });
    setTodoList(newTodo);
    setTodo(newTodo);
  }
  function handleShowDone() {
    const newTodo = [];
    todoList.forEach((i) => {
      if (i.isComplete === true) {
        newTodo.push(i);
      }
      console.log(newTodo);
      setTodo(newTodo);
    });
  }
  function handleShowNotDone() {
    const newTodo = [];
    todoList.forEach((i) => {
      if (i.isComplete === false) {
        newTodo.push(i);
      }
      setTodo(newTodo);
    });
  }

  function handleShowAll() {
    setTodo(todoList);
  }

  return (
    <div className="Todo">
      <div className="text-center">Todo Hook</div>
      <form onSubmit={handleSubmit}>
        <div className="button-todo">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleShowAll}
          >
            Show all
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleShowDone}
          >
            Show done
          </button>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleShowNotDone}
          >
            Show not done
          </button>
        </div>
        <div className="main-todo">
          <div className="header">
            <input
              type="text"
              placeholder="Add a new item"
              value={value}
              onChange={handleValueChange}
            />
            <button className="btn btn-primary btn-edit" type="submit">
              Add Item
            </button>
          </div>
        </div>
      </form>
      <TodoList
        todos={showTodo}
        onClickDone={handleDone}
        onClickDelete={handleDelete}
        onClickEdit={handleEdit}
      ></TodoList>
    </div>
  );
}

export default TodoHook;
