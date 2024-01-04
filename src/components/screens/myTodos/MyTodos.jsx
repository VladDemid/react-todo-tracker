import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import Todo from "../newTodo/Todo/Todo";
import styles from "./MyTodos.module.scss";

export default function MyTodos() {
  const { user } = useAuth();

  // useEffect(() => {
  //   console.log("user changed!", user);
  // }, [user]);

  return (
    <div>
      <ul className={styles.todoList}>
        {user?.todos?.map((todo) => (
          <li key={todo.updated_at}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
