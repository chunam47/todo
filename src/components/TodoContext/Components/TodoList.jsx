import React, { useState, useMemo } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { useTodos } from "../Store/Store";

const TodoList = () => {
  const [filter, setFilter] = useState("all");
  const { todos, toggleTodo, removeTodo } = useTodos();
  const filteredTodos = useMemo(() => {
    if (filter === "all") {
      return todos;
    } else if (filter === "completed") {
      return todos.filter((t) => t.isComplete);
    } else if (filter === "not_completed") {
      return todos.filter((t) => !t.isComplete);
    }
  }, [todos, filter]);
  return (
    <>
      <List>
        {filteredTodos.map((todo) => {
          return (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.title} />
              <ListItemSecondaryAction>
                <Checkbox
                  checked={todo.isComplete}
                  onClick={() => toggleTodo(todo.id)}
                />
                <IconButton onClick={() => removeTodo(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <Box pr={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("all")}
        >
          All
        </Button>
      </Box>
      <Box pr={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </Box>
      <Box component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("not_completed")}
        >
          !Complete
        </Button>
      </Box>
    </>
  );
};

export default TodoList;
