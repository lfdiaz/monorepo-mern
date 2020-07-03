import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import { MemoryRouter } from "react-router-dom";

addDecorator(storyFn => {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "lightgray" }}
    >
      <MemoryRouter initialEntries={["/"]}>
        <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      </MemoryRouter>
    </div>
  );
});
