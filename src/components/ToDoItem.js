import React, { useState } from "react";

const ToDoItem = (props) => {
  const { todo, clickDelete, clickComplete, clickEdit } = props;
  const [isEditing, setisEditing] = useState(false);
  const [editingItem, seteditingItem] = useState(null);
  const [inputValue, setInputValue] = useState("");

  function deleteItem(id) {
    clickDelete(id);
  }

  function completeItem(id) {
    clickComplete(id);
  }

  function editItem(item) {
    setisEditing(true);
    seteditingItem(item);
    setInputValue(item.title);
  }

  function saveEditItem(id) {
    setisEditing(false);
    clickEdit(id, inputValue);
    setInputValue("");
  }

  function cancelEditItem(id) {
    setisEditing(false);
    setInputValue("");
  }
  console.log(props);
  return (
    <div className="main">
      {isEditing && editingItem === todo ? (
        <div className="TodoItem">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          ></input>
          <div>
            <button
              onClick={() => cancelEditItem(todo.id)}
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
              onClick={() => completeItem(todo.id)}
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
              onClick={() => deleteItem(todo.id)}
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
