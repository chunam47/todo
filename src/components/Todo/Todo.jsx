import React, { useState } from "react";

import { db } from "../../firebase";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import checkIcon from "../../assets/checkIcon.png";
// import hihi from "../../assets/hihi.jpg";
import "./Todo.css";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const [value, setValue] = useState("");

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todo-list"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value.trim()) {
      await addDoc(collection(db, "todo-list"), {
        value,
        isComplete: false,
      });
      setValue("");
    }
  };
  const handleDone = async (todos) => {
    await updateDoc(doc(db, "todo-list", todos.id), {
      isComplete: !todos.isComplete,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todo-list", id));
  };

  const handleEdit = async (todos, value) => {
    await updateDoc(doc(db, "todo-list", todos.id), {
      value: value.trim(),
    });
  };
  // const handleShowDone = async (todos) => {
  //   await todos.forEach((i) => {
  //     if (i.isComplete === true) {
  //       console.log("=====");
  //     }
  //   });
  //   // const newTodo = [];
  //   // todoList.forEach((i) => {
  //   //   if (i.isComplete === true) {
  //   //     newTodo.push(i);
  //   //   }
  //   //   console.log(newTodo);
  //   //   setTodo(newTodo);
  //   // });
  // };
  // function handleShowNotDone() {
  //   // const newTodo = [];
  //   // todoList.forEach((i) => {
  //   //   if (i.isComplete === false) {
  //   //     newTodo.push(i);
  //   //   }
  //   //   setTodo(newTodo);
  //   // });
  // }

  // function handleShowAll() {
  //   // setTodo(todoList);
  // }

  return (
    <div className="main">
      <div className="Todo container m-5 p-2 rounded mx-auto shadow">
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <img
                src={checkIcon}
                alt="check"
                className="las la-check text-white rounded p-2"
              ></img>
              <u className="todo-title">Chu's Todo-s</u>
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
          {/* <div className="button-todo col col-11 mx-auto">
          <button className="btn" type="button" onClick={handleShowAll}>
            Show all
          </button>
          <button className="btn " type="button" onClick={handleShowDone}>
            Show done
          </button>
          <button className="btn" type="button" onClick={handleShowNotDone}>
            Show Unfinished
            </button>
          </div> */}
        </form>
        <TodoList
          toDos={todos}
          handleDone={handleDone}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        ></TodoList>
      </div>
    </div>
  );
};

export default Todo;
