import React from "react";
import ToDoItem from "./TodoItem/ToDoItem";
import "./TodoList.css";

const TodoList = (props) => {
  const { toDos } = props;
  return (
    <div className="todo-block mx-1 px-5 pb-3 w-80 col mx-auto">
      {toDos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} actions={props} />
      ))}
    </div>
  );
};

export default TodoList;
