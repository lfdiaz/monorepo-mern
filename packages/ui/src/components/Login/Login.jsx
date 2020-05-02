import React, { useState } from "react";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Input,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "100%",
      height: "100%"
    },
    card: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.background.paper,
      maxWidth: theme.typography.pxToRem(350),
      minHeight: theme.typography.pxToRem(250),
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    cardContent: {
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    }
  })
);

const Login = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle1" color="textPrimary">
            Login
          </Typography>
          <TextField
            type="text"
            autoFocus={true}
            label={"Username"}
            name="username"
          ></TextField>
          <TextField
            type="password"
            autoFocus={true}
            label={"Password"}
            name="password"
          ></TextField>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
