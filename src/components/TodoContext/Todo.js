import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { withProvider } from "./Store/Store.jsx";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  borderColor: "text.primary",
};
const Todos = () => {
  return (
    <Box
      p={2}
      sx={{
        ...commonStyles,
        borderRadius: "16px",
        borderColor: "primary.main",
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <TodoInput />
        </Grid>
        <Grid item>
          <TodoList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default withProvider(Todos);
