import React from "react";
import ToDoItem from "./TodoItem/ToDoItem";
import "./TodoList.css";

const TodoList = (props) => {
  const { toDos } = props;
  return (
    <div>
      {toDos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} actions={props} />
      ))}
    </div>
  );
};

export default TodoList;
