import React, { useState } from "react";

const ToDoItem = (props) => {
  const { todo, actions } = props;
  const [isEditing, setisEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const editItem = (item) => {
    setisEditing(true);
    setInputValue(item.value);
  };

  const saveEditItem = (todo) => {
    setisEditing(false);
    actions.handleEdit(todo, inputValue);
    setInputValue("");
  };

  const cancelEditItem = () => {
    setisEditing(false);
    setInputValue("");
  };
  return (
    <div className="main row px-3 align-items-center todo-item rounded">
      {isEditing ? (
        <div className="TodoItem d-flex align-items-center">
          <textarea
            className="todo-textarea"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          ></textarea>
          <div className="todo-action-edit">
            <button
              onClick={() => cancelEditItem()}
              className="btn complete btn-outline-info"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={() => saveEditItem(todo)}
              className="btn complete btn-outline-info"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="TodoItem d-flex align-items-center">
          <p
            className={
              todo.isComplete ? "TodoItem-complete" : "TodoItem-noComplete"
            }
          >
            {todo.value}
          </p>
          <div className="d-flex action-button">
            <button
              onClick={() => actions.handleDone(todo)}
              className="btn btn-outline-info complete"
            >
              {todo.isComplete ? "Undone" : "Done"}
            </button>
            <button
              onClick={() => editItem(todo)}
              className="btn complete btn-outline-info"
            >
              Edit
            </button>
            <button
              onClick={() => actions.handleDelete(todo.id)}
              className="btn btn-outline-info delete-item"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoItem;
