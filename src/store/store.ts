import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice/userSlice";
import todoSlice from "./features/todoSlice/todoSlice";
import { todoApi } from "./api/todoApi";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todos: todoSlice,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
