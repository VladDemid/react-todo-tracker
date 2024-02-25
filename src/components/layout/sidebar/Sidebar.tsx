import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import {
  IoAdd,
  IoArrowBack,
  IoClose,
  IoExitOutline,
  IoList,
  IoListOutline,
  IoMenu,
  IoPersonOutline,
} from "react-icons/io5";
import clsx from "clsx";

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div className={clsx(styles.sidebar, isOpened && styles.opened)}>
      <button
        className={clsx(styles.toggle, "button")}
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? <IoClose /> : <IoMenu />}
      </button>
      {/* <button className={styles.back} onClick={() => {}}>
        <IoArrowBack />
      </button> */}
      <nav>
        <ul>
          <li className={clsx(styles.my_todos, styles.nav_button, "button")}>
            <Link to="my-todos">
              <span className={styles.title}>my todos</span>
              <IoListOutline />
            </Link>
          </li>
          <li className={clsx(styles.new_todo, styles.nav_button, "button")}>
            <Link to="new-todo">
              <span className={styles.title}>new todo</span>
              <IoAdd />
            </Link>
          </li>
          <li className={clsx(styles.profile, styles.nav_button, "button")}>
            <Link to="profile">
              <span className={styles.title}>profile</span>
              <IoPersonOutline />
            </Link>
          </li>
        </ul>
      </nav>
      <button className={clsx(styles.logout, "button")}>
        <IoExitOutline />
      </button>
    </div>
  );
}
