import { useForm } from "react-hook-form";
import Button from "../../ui/button/Button";
import Field from "../../ui/form-elements/Field";
import styles from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import useAuthPage from "./useAuthPage";

export default function LoginForm({ changeAuthState }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "mr.zgot@yandex.ru",
      password: "123456",
    },
  });

  const { onSubmitAuth } = useAuthPage("login", setIsLoading);

  return (
    <>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit((data) => onSubmitAuth(data))}>
        <Field
          register={register}
          getValues={getValues}
          name="email"
          isRequired={true}
          options={{
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
          errors={errors}
        />

        <Field
          name="password"
          type="password"
          register={register}
          getValues={getValues}
          options={{
            required: "required",
            minLength: {
              value: 6,
              message: "must be 6 chars",
            },
          }}
          errors={errors}
        />
        <Button text="sign in" type="form_button" disabled={isLoading} />
      </form>
      {/* <div className={styles.create_account}>
        <div>
          Dont have an account?
          <span
            className={styles.register_button}
            onClick={() => changeAuthState()}
          >
            Register!
          </span>
        </div>
      </div> */}
    </>
  );
}
