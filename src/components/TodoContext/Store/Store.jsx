import React, { useContext, createContext } from "react";
import useLocalStorage from "../../../hook/useLocalStorage";
const { v4: uuidv4 } = require("uuid");

const Context = createContext({
  todos: [],
});

const Provider = (props) => {
  const { children } = props;
  const [todos, setTodos] = useLocalStorage("task", []);
  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };
  const toggleTodo = (id) => {
    const foundTodo = todos.find((t) => t.id === id);
    if (foundTodo) {
      foundTodo.isComplete = !foundTodo.isComplete;
    }
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        return foundTodo;
      }
      return t;
    });
    setTodos(newTodos);
  };
  return (
    <Context.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </Context.Provider>
  );
};

export const useTodos = () => useContext(Context);

export const withProvider = (Component) => {
  return (props) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
};
