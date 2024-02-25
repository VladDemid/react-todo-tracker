import styles from "./Profile.module.scss";
import Button from "../../ui/button/Button";
import { useEffect } from "react";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.menu}>
        {/* {user && user?.id} */}
        <Button text="new todo" link="/new-todo"></Button>
        <Button text="my todos" link="/my-todos"></Button>
      </div>
    </div>
  );
}
