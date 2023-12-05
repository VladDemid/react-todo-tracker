import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../ui/button/Button";
import styles from "./Home.module.scss";
import { CgProfile } from "react-icons/cg";

export default function Home() {
  const { isAuth, setIsAuth } = useAuth();

  return (
    <>
      <CgProfile />
      <div className={styles.promo}>
        <span>My To-Do's </span>
        app to doing your TODOS!
      </div>
      <div className={styles.button_wrapper}>
        {isAuth ? (
          <Button
            className=""
            text={["profile", <CgProfile key="1" />]}
            link="/profile"
          ></Button>
        ) : (
          <Button className="" text="login" link="/auth"></Button>
        )}
      </div>
    </>
  );
}
