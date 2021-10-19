import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

TodoList.propTypes = {
  todos: PropTypes.array,
  onClickDone: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onClickDone: null,
  onClickEdit: null,
  onClickDelete: null,
};

function TodoList(props) {
  const { todos, onClickDone, onClickEdit, onClickDelete } = props;
  const [editItem, setEditItem] = useState(false);
  const [edittingText, setEdittingText] = useState(todos.title);

  function onDelete(id) {
    onClickDelete(id);
  }

  function onComplete(id) {
    onClickDone(id);
  }

  function onEdit() {
    setEditItem(true);
  }

  function onSave(id) {
    setEditItem(false);
    if (edittingText) {
      onClickEdit(edittingText, id);
    } else {
      setEdittingText(todos.title);
    }
  }
  return (
    <div>
      {todos.map((todo) => (
        <div className="main" key={todo.id}>
          {editItem ? (
            <div className="TodoItem">
              <input
                type="text"
                value={edittingText}
                onChange={(e) => setEdittingText(e.target.value.toLowerCase())}
              ></input>
              <div>
                <button
                  onClick={() => onSave(todo.id)}
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
                  onClick={() => onComplete(todo.id)}
                  className="btn btn-outline-info complete"
                >
                  Done
                </button>
                <button
                  onClick={() => onEdit()}
                  className="btn complete btn-outline-info"
                >
                  {editItem ? "Save" : "Edit"}
                </button>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="btn btn-outline-info delete-item"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
