import { useEffect, useState } from "react";
import Filter from "../../shared/filter/Filter";
import Todo from "../newTodo/Todo/Todo";
import styles from "./MyTodos.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  sortTodos,
  setTodos,
} from "../../../store/features/todoSlice/todoSlice";
import { RootState } from "../../../store/store";
import { eventSortType, sortOption, todoSortTypes } from "../../../types/other";

export default function MyTodos() {
  const [sortType, setSortType] = useState("");
  let todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  let testVar = "11111111";

  const todoFilterOptions: sortOption[] = [
    { title: "newest", value: "newest" },
    { title: "oldest", value: "oldest" },
  ];

  function testTodos() {
    testVar = "2222222";
    console.log(testVar);
  }

  function onFilterChange({ target: { value } }: eventSortType) {
    dispatch(sortTodos({ sortType: value }));
    setSortType(value);
    // todos = [];
    // console.log(`sort changed value:${value}, sortType:${sortType}`);
    // setSortType(value);
    // let sortedTodos;
    // if (value === "newest") {
    //   sortedTodos = todos.toSorted((a, b) => b.id - a.id);
    // } else if (value === "oldest") {
    //   sortedTodos = todos.toSorted((a, b) => a.id - b.id);
    // }
    // todos = sortedTodos;
    // console.log(sortedTodos);
    // const arr1 = [1, 2, 3];
    // const arr2 = arr1.toSorted((a, b) => b - a);
    // console.log(arr2);
  }

  return (
    <div className={styles.my_todos}>
      {testVar}
      {sortType}
      <hr />
      <button className="button" onClick={testTodos}>
        test todos
      </button>
      {/* todosState:{String(todosState)}
      <hr />
      todos:{String(todos)} */}
      <Filter
        onFilterChange={onFilterChange}
        defaultValue="Sort by"
        options={todoFilterOptions}
      ></Filter>
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
