import { useEffect, useMemo, useState } from "react";
import Todo from "../newTodo/Todo/Todo";
import TodosList from "./TodosList/TodosList";
import styles from "./MyTodos.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  sortTodos,
  setTodos,
} from "../../../store/features/todoSlice/todoSlice";
import { RootState } from "../../../store/store";
import { eventSortType, sortOption, todoSortTypes } from "../../../types/other";
import Select from "react-select";
import CustomSelect from "../../ui/CustomSelect/CustomSelect";

export default function MyTodos() {
  const [sortType, setSortType] = useState("");
  let todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const todoFilterOptions: sortOption[] = [
    { label: "newest", value: "newest" },
    { label: "oldest", value: "oldest" },
  ];

  function onFilterChange({ target: { value } }: eventSortType) {
    dispatch(sortTodos({ sortType: value }));
    setSortType(value);
  }

  return (
    <div className={styles.my_todos}>
      {/* <Select
        onFilterChange={onFilterChange}
        defaultValue="Sort by"
        options={todoFilterOptions}
        selectId="todoSort"
      ></Select> */}
      <CustomSelect options={todoFilterOptions} />
      <TodosList todosData={todos}></TodosList>
      {/* <div className={styles.todos_heading}>
        <div className={styles.id}>#</div>
        <div className={styles.task_name}>Task</div>
        <div className={styles.duration}>Time</div>
        <div className={styles.check}>Edit</div>
      </div>
      <ul className={styles.todoList}>
        {todos?.map((todo) => (
          <li key={todo.updated_at}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
