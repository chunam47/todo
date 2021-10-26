import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";
import Todo from "./page/TodoClass/Todo";
import TodoHook from "./page/TodoHook/TodoHook";
import Todos from "./components/TodoContext/Todo";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="menu">
            <div>
              <Link to="/todoHook" className="link">
                Todo Hook
              </Link>
            </div>
            <div>
              <Link to="/todoContext" className="link">
                Todo Context
              </Link>
            </div>
            <div>
              <Link to="/todo" className="link">
                Todo Class
              </Link>
            </div>
          </div>
          <Route path="/todoHook" component={TodoHook} />
          <Route path="/todoContext" component={Todos} />
          <Route path="/todo" component={Todo} />
        </div>
      </Router>
    </div>
  );
}

export default App;
