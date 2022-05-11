import React, { useState } from "react";

import checkIcon from "../../assets/checkIcon.png";
import TodoList from "../../components/TodoHook/TodoHook";
import useLocalStorage from "../../hook/useLocalStorage";
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

  function handleEdit(id, value) {
    const newTodo = todoList.map((todo, index) => {
      if (todo.id === id && value.trim()) {
        return {
          ...todo,
          title: value.trim(),
        };
      }
      return todo;
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
    <div className="Todo container m-5 p-2 rounded mx-auto shadow">
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <img
              src={checkIcon}
              alt="check"
              className="las la-check text-white rounded p-2"
            ></img>
            <u className="todo-title">My Todo-s</u>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row m-1 p-3 todo-input">
          <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center header">
              <div className="col">
                <input
                  type="text"
                  placeholder="Add new ..."
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
              <div className="col-auto px-0 mx-0 mr-2">
                <button
                  type="submit"
                  className="btnAdd"
                  onChange={handleValueChange}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>
        <div className="button-todo col col-11 mx-auto">
          <button className="btn" type="button" onClick={handleShowAll}>
            Show all
          </button>
          <button className="btn " type="button" onClick={handleShowDone}>
            Show done
          </button>
          <button className="btn" type="button" onClick={handleShowNotDone}>
            Show Unfinished
          </button>
        </div>
      </form>
      <TodoList
        toDos={showTodo}
        handleDone={handleDone}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      ></TodoList>
    </div>
  );
}

export default TodoHook;
