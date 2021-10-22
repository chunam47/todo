import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TodoList.css";
import ToDoItem from "./ToDoItem";

const TodoList = (props) => {
  const { todos, onClickDone, handleEdit, onClickDelete } = props;

  const handleDelete = (id) => {
    onClickDelete(id);
  };
  const handleEditTodo = (id, value) => {
    handleEdit(id, value);
  };
  const handleSave = (id) => {
    onClickDelete(id);
  };
  const handleCacelSave = (id) => {
    onClickDelete(id);
  };
  const handleComplete = (id) => {
    onClickDone(id);
  };

  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
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
};

export default TodoList;
