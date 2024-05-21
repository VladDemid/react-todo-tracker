import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
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
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/features/userSlice/userSlice";

export default function Sidebar() {
  const { isShow, ref, setIsShow } = useOnClickOutside(true);
  const dispatch = useDispatch();
  // function onExit() {
  //   dispatch(logOut());
  //   location.href = "/";
  // }

  return (
    <div className={clsx(styles.sidebar, isShow && styles.opened)} ref={ref}>
      <button
        className={clsx(styles.toggle, "button")}
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? <IoClose /> : <IoMenu />}
      </button>
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
          <li className={clsx(styles.exit, styles.nav_button, "button")}>
            <Link
              to="/"
              className={clsx(styles.logout, "button", styles.nav_button)}
              onClick={() => dispatch(logOut())}
            >
              <span className={styles.title}>exit</span>
              <IoExitOutline />
            </Link>
          </li>
        </ul>
      </nav>
      {/* <Link
        to="/"
        className={clsx(styles.logout, "button", styles.nav_button)}
        onClick={() => dispatch(logOut())}
      >
        <span className={styles.title}>exit</span>
        <IoExitOutline />
      </Link> */}
    </div>
  );
}
