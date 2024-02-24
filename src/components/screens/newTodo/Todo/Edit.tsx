import {
  AiOutlineCheckSquare,
  AiOutlineCloseSquare,
  AiOutlineDelete,
} from "react-icons/ai";
import styles from "./Todo.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "../../../../store/api/todoApi";
import useToastPromise from "../../../hooks/useToastPromise";
import {
  deleteTodoReducer,
  toggleTodoReducer,
} from "../../../../store/features/todoSlice/todoSlice";
import { TodoProps } from "../../../../types/todo.types";

export default function Edit({ todo }: TodoProps) {
  const [deleteTodo, deleteResult] = useDeleteTodoMutation();
  const [toggleTodo, toggleResult] = useToggleTodoMutation();
  const dispatch = useDispatch();

  function onToggle() {
    const toastPromise = useToastPromise(
      toggleTodo(todo).unwrap(),
      "toggle todo"
    );

    toastPromise()
      .then(() => {
        dispatch(toggleTodoReducer(todo));
      })
      .catch((err) => {
        throw new Error("Toggle error:", err);
      });
  }

  function onDelete() {
    const toastPromise = useToastPromise(
      deleteTodo(todo).unwrap(),
      "deletion todo"
    );

    toastPromise()
      .then((resp) => dispatch(deleteTodoReducer(todo)))
      .catch((err) => {
        throw new Error();
      });
    // console.log("dispatch(toggleTodoReducer(todo))");
    // dispatch(deleteTodoReducer(todo));
  }

  return (
    // toggle | delete | ?edit?
    <div className={styles.more}>
      {!todo.is_done && (
        <AiOutlineCheckSquare className={styles.check} onClick={onToggle} />
      )}
      {todo.is_done && (
        <AiOutlineCloseSquare className={styles.close} onClick={onToggle} />
      )}
      {/* <IoIosArrowDown className={styles.edit} onClick={() => {}} /> */}
      <AiOutlineDelete className={styles.delete} onClick={onDelete} />
    </div>
  );
}
