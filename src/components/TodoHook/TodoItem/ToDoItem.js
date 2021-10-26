import React, { useState } from "react";

const ToDoItem = (props) => {
  const { todo, actions } = props;
  const [isEditing, setisEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const editItem = (item) => {
    setisEditing(true);
    setInputValue(item.title);
  };

  const saveEditItem = (id) => {
    setisEditing(false);
    actions.handleEdit(id, inputValue);
    setInputValue("");
  };

  const cancelEditItem = () => {
    setisEditing(false);
    setInputValue("");
  };
  return (
    <div className="main">
      {isEditing ? (
        <div className="TodoItem">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          ></input>
          <div>
            <button
              onClick={() => cancelEditItem()}
              className="btn complete btn-outline-info"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={() => saveEditItem(todo.id)}
              className="btn complete btn-outline-info"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="TodoItem">
          <p
            className={
              todo.isComplete ? "TodoItem-complete" : "TodoItem-noComplete"
            }
          >
            {todo.title}
          </p>
          <div>
            <button
              onClick={() => actions.handleDone(todo.id)}
              className="btn btn-outline-info complete"
            >
              Done
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
