import { useMutation } from "@tanstack/react-query";
import { $axios } from "../../../../services/api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

export default function useTodo() {
  const { user, setUser } = useAuth();

  const { mutate, mutateAsync, status } = useMutation({
    mutationFn: async (todo) => {
      const data = await $axios.patch(`/todos/${todo?.id}`, {
        type: "toggle isDone field",
        value: !todo?.is_done,
      });
      return data;
    },
    mutationKey: ["toggleIsDone"],
    onSuccess: (data) => {
      const indexOfChangedTodo = user.todos.findIndex((el) => {
        return el.id === data.data.id;
      });
      const newUser = user;
      newUser.todos[indexOfChangedTodo].is_done =
        !newUser.todos[indexOfChangedTodo].is_done;
      setUser(newUser);
    },
  });

  const toggleTodo = (todo, setIsDone) => {
    toast
      .promise(mutateAsync(todo), {
        pending: {
          render() {
            return "Pending...";
          },
          icon: false,
        },
        success: {
          render({ data }) {
            return `Change completed!`;
          },
          // other options
          icon: "👍",
        },
        error: {
          render({ data }) {
            // When the promise reject, data will contains the error
            return "Error";
          },
        },
      })
      .then(() => setIsDone(!todo.is_done));
  };
  return { toggleTodo };
}
