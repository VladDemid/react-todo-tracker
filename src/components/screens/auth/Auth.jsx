import styles from "./Auth.module.scss";
import { DevTool } from "@hookform/devtools";
import Field from "../../ui/form-elements/Field";
import { useForm } from "react-hook-form";
import Button from "../../ui/button/Button";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Auth() {
  const [authState, setAuthState] = useState("registration");
  const changeAuthState = () => {
    setAuthState(authState === "login" ? "registration" : "login");
  };

  return (
    <div className={styles.auth}>
      <div className={styles.form_wrapper}>
        {authState === "login" ? (
          <LoginForm changeAuthState={changeAuthState} />
        ) : (
          <RegisterForm changeAuthState={changeAuthState} />
        )}
      </div>
      {/* <DevTool control={control}></DevTool> */}
      {/* <div className={styles.create_account}></div> */}
      <div className={styles.create_account}>
        <div>
          Already have account?
          <span
            className={styles.register_button}
            onClick={() => changeAuthState()}
          >
            Sign in!
          </span>
        </div>
      </div>
    </div>
  );
}
