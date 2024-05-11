import { useEffect, useReducer, useState } from "react";
import styles from "./Todo.module.scss";
import cn from "clsx";
import useTime from "./useTime";
import Edit from "./Edit";
import { TodoProps } from "../../../../types/todo.types";
import { months } from "../../../../types/other";

export default function Todo({ todo }: TodoProps) {
  // console.log("todo: ", todo);

  return (
    <div className={styles.todo_wrapper}>
      {todo.newDay && (
        <h3 className={styles.day_separator}>
          {todo.dateFormatted[2]} {months[1]}
        </h3>
      )}
      <div
        className={cn(styles.todo, {
          [styles.done]: todo.is_done,
        })}
      >
        <div className={styles.id}>{todo.id}</div>
        <h3 className={styles.title}>
          {/* {todo.title} */}
          {todo.dateFormatted[2]}, {String(todo.newDay)}
        </h3>
        {/* <div className={styles.is_done}>{todo.is_done ? "done" : "undone"}</div> */}
        <div className={styles.duration}>
          {todo.duration}
          <span className={styles.small}> min </span>
        </div>

        <div className={styles.edit}>
          <Edit todo={todo} />
        </div>
      </div>
    </div>
  );
}
