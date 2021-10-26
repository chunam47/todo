import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { useTodos } from "../Store/Store";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 400,
  },
  buttonAdd: {},
}));

const TodoInput = (props) => {
  const { addTodo } = useTodos();
  const classes = useStyles();
  const [newTodo, setNewTodo] = useState("");
  const onClick = () => {
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <>
      <Grid container>
        <Grid item>
          <TextField
            className={classes.textField}
            label="Add a new Todo"
            variant="outlined"
            size="small"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Box pl={2}>
            <Button
              disabled={newTodo.length === 0}
              variant="contained"
              color="primary"
              onClick={onClick}
            >
              Add Todo
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoInput;
