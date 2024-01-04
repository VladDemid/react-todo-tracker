import { useEffect, useReducer, useState } from "react";
import styles from "./Todo.module.scss";
import cn from "clsx";
import useTime from "./useTime";
import More from "./More";

export default function Todo({ todo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  function testTodo() {
    console.log(todo);
  }

  return (
    <div
      className={cn(styles.todo, {
        [styles.done]: todo.is_done,
        [styles.open]: isOpen,
      })}
    >
      <h3 onClick={() => setIsOpen(!isOpen)}>{todo.title}</h3>
      <div className={styles.duration}>
        {todo.duration}
        <span className={styles.small}>min {String(todo.is_done)}</span>
      </div>
      <More todo={todo} setIsDone={setIsDone} />
    </div>
  );
}
