import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TodoList.css";
import ToDoItem from "./ToDoItem";

TodoList.propTypes = {
  todos: PropTypes.array,
  onClickDone: PropTypes.func,
  handleEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onClickDone: null,
  handleEdit: null,
  onClickDelete: null,
};

function TodoList(props) {
  const { todos, onClickDone, handleEdit, onClickDelete } = props;

  function handleDelete(id) {
    onClickDelete(id);
  }
  function handleEditTodo(id, value) {
    handleEdit(id, value);
  }
  function handleSave(id) {
    onClickDelete(id);
  }
  function handleCacelSave(id) {
    onClickDelete(id);
  }
  function handleComplete(id) {
    onClickDone(id);
  }

  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem
          todo={todo}
          clickDelete={handleDelete}
          clickEdit={handleEditTodo}
          clickSave={handleSave}
          clickCancelSave={handleCacelSave}
          clickComplete={handleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
