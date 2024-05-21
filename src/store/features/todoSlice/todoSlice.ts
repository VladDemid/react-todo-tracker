import { createSlice, current } from "@reduxjs/toolkit";
import { Todo } from "../../../types/todo.types";
import { todoSortTypes } from "../../../types/other";

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action) {
      console.log("setTodos");
      // console.log(action.payload.todos);
      //! добавление даты своего формата сделать на этапе создания объекта
      //Todo обернуть это в middleware какой-нить

      //добавление
      let todos: Todo[] = action.payload.todos.map(
        (todo: Todo, idx: number) => {
          const dateArray = todo.created_at.split("T")[0].split("-");
          // console.log(dateArray);
          return { ...todo, dateArray };
        }
      );

      let todosDates = action.payload.todos.map((todo: Todo, idx: number) => {
        const dateFormatted = todo.created_at.split("T")[0].split("-");

        return { dateFormatted: dateFormatted };
      });
      // console.log("todosDates:", todosDates);

      const newTodos = todos.map((todo: Todo, idx: number) => {
        //* добавление триггера нового дня для разделителя
        // console.log(new Date(todo.created_at));
        const newDay =
          idx === 0 ||
          todosDates[idx].dateFormatted[2] !==
            todosDates[idx - 1].dateFormatted[2]
            ? true
            : false;
        return { ...todo, newDay };
      });

      console.log(newTodos);
      //!
      return newTodos;
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
