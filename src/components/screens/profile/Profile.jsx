import AuthProvider from "../../../providers/AuthProvider";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Profile.module.scss";
import Button from "../../ui/button/Button";
import useProfile from "./useProfile";
import { useEffect } from "react";

export default function Profile() {
  const { user, setUser } = useAuth();
  useProfile();

  function showUser() {
    console.log(user);
  }

  // axios.get("https://jsonplaceholder.typicode.com/posts")

  return (
    <div className={styles.profile}>
      <div className={styles.menu}>
        {/* {user && user?.id} */}
        <Button text="new todo" link="/new-todo"></Button>
        <button onClick={showUser}>test user</button>
      </div>
    </div>
  );
}
