import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");

      headers.set("Content-Type", "application/json");
      if (token) headers.set("authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    //get profile data after reload page
    getProfile: builder.query({
      query: () => `users/profile`,
    }),
    auth: builder.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: `todos`,
        method: "post",
        body,
      }),
    }),
    toggleTodo: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: "DELETE",
        body: todo,
      }),
    }),
  }),
});

export const {
  useLazyGetProfileQuery,
  useAuthMutation,
  useAddTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
