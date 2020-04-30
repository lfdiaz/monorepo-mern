import React, { useState } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import {
  selectors,
  actions
} from "@starter-project/web-docker/src/features/todo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      position: "relative",
      backgroundColor: theme.palette.background.default
    }
  })
);

const Home = props => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const todo = useSelector(selectors.getTodos);
  return (
    <div
      className={classes.root}
      onClick={() => dispatch(actions.addTodo({ id: 1, text: "Hello" }))}
    >
      hello
    </div>
  );
};

export default Home;
