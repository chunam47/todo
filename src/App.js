import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from "./page/Todo";
import TodoHook from "./page/TodoHook";
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
            {/* <div>
              <Link to="/todo" className="link">
                Todo
              </Link>
            </div> */}
          </div>
          <Route path="/todoHook" component={TodoHook} />
          <Route path="/todo" component={Todo} />
        </div>
      </Router>
    </div>
  );
}

export default App;
