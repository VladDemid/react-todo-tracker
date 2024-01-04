import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import todoSlice from "./todoSlice/todoSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});
