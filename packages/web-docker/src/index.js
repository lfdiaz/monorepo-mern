import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import logger from "./logger";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger]
});
