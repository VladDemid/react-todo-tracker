import { useEffect, useRef } from "react";
import Button from "../../ui/button/Button";
import styles from "./Home.module.scss";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function Home() {
  // const isAuth = useSelector((state) => state.user.isAuth);
  const name = useSelector((state: RootState) => state.user.user?.name);

  return (
    <>
      <div className={styles.promo}>
        <span>My todo's </span>
        app to track your TODOS!
      </div>
      <div className={styles.button_wrapper}>
        {name ? (
          <Button
            text={["profile", <CgProfile key="1" />]}
            link="/profile"
          ></Button>
        ) : (
          <Button text="login" link="/auth"></Button>
        )}
      </div>
    </>
  );
}
