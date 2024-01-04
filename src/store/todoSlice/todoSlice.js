import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo(state, action) {
      return action.payload;
    },
  },
});

export const { setTodo } = todoSlice.actions;

export default todoSlice.reducer;
