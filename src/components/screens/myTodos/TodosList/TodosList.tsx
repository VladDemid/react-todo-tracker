import { TodoList } from "../../../../types/todo.types";
import Todo from "../../newTodo/Todo/Todo";
import styles from "./TodosList.module.scss";

// const todosData: TodoList = [];

export default function TodosList({ todosData }: { todosData: TodoList }) {
  return (
    <div>
      <div className={styles.todos_heading}>
        <div className={styles.id}>#</div>
        <div className={styles.task_name}>Task</div>
        <div className={styles.duration}>Time</div>
        <div className={styles.check}>Edit</div>
      </div>
      <ul className={styles.todoList}>
        {todosData?.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
