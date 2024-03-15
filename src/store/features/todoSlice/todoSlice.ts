import { createSlice, current } from "@reduxjs/toolkit";
import { Todo } from "../../../types/todo.types";
import { todoSortTypes } from "../../../types/other";

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action) {
      // console.log("setTodos");
      return action.payload.todos;
    },
    sortTodos(state, action: { payload: { sortType: todoSortTypes } }) {
      // console.log("sort todos reducer: ", action.payload.sortType);
      let sortedTodos;
      if (action.payload.sortType === "oldest") {
        sortedTodos = [...current(state)].toSorted((a, b) => a.id - b.id);
      } else if (action.payload.sortType === "newest") {
        sortedTodos = [...current(state)].toSorted((a, b) => b.id - a.id);
      }
      // sortedTodos = [...current(state)].
      return sortedTodos;
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
  sortTodos,
  addTodoReducer,
  toggleTodoReducer,
  deleteTodoReducer,
} = todoSlice.actions;

export default todoSlice.reducer;
