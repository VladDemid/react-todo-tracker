import { IoIosArrowDown } from "react-icons/io";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import useTodo from "./useTodo";
import styles from "./Todo.module.scss";
import { useEffect } from "react";

export default function More({ todo, setIsDone }) {
  const { toggleTodo } = useTodo();

  return (
    <div className={styles.more}>
      {!todo.is_done && (
        <IoCheckmarkCircleOutline
          className={styles.check}
          onClick={() => toggleTodo(todo, setIsDone)}
        />
      )}
      {todo.is_done && (
        <IoCloseCircleOutline
          className={styles.close}
          onClick={() => toggleTodo(todo, setIsDone)}
        />
      )}
      <IoIosArrowDown
        className={styles.edit}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}
