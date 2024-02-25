import { createSlice, current } from "@reduxjs/toolkit";
import { Todo } from "../../../types/todo.types";

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action) {
      return action.payload.todos;
    },
    addTodoReducer(state, action: { payload: Todo }) {
      const newTodo = action.payload;
      let newState = [...current(state)];
      newState.push(newTodo);
      return newState;
    },
    toggleTodoReducer(state, action: { payload: Todo }) {
      const todoTarget = action.payload;
      let newState = JSON.parse(JSON.stringify(current(state)));
      console.log("prev state:", newState);
      newState.forEach((todo: Todo) => {
        if (todo.id === todoTarget.id) todo.is_done = !todo.is_done;
      });
      console.log("new state:", newState);
      return newState;
    },
    deleteTodoReducer(state, action: { payload: Todo }) {
      const targetId = action.payload.id;
      return [...current(state)].filter((todo) => todo.id !== targetId);
    },
  },
});

export const {
  setTodos,
  addTodoReducer,
  toggleTodoReducer,
  deleteTodoReducer,
} = todoSlice.actions;

export default todoSlice.reducer;
