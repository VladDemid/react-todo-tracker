import Todo from "../newTodo/Todo/Todo";
import styles from "./MyTodos.module.scss";
import { useSelector } from "react-redux";

export default function MyTodos() {
  const todos = useSelector((state) => state.todos); //todo брать user из redux

  return (
    <div className={styles.my_todos}>
      <div className={styles.todos_heading}>
        <div className={styles.id}>#</div>
        <div className={styles.task_name}>Task</div>
        {/* <div className={styles.status}>Status</div> */}
        <div className={styles.duration}>Time</div>
        <div className={styles.check}>Edit</div>
      </div>
      <ul className={styles.todoList}>
        {todos?.map((todo) => (
          <li key={todo.updated_at}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
