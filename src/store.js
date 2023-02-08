import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
