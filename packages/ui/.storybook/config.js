import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";

addDecorator(storyFn => {
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
});
