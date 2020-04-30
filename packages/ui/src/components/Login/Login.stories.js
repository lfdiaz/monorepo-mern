import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Login"
};

export const Text = () => <div onClick={action("clicked")}>Hello Button</div>;
