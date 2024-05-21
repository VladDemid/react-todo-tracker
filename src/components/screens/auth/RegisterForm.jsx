import { useForm } from "react-hook-form";
import Button from "../../ui/button/Button";
import Field from "../../ui/form-elements/Field";
import styles from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";
import useAuthPage from "./useAuthPage";
import { useEffect, useState } from "react";

export default function RegisterForm({ changeAuthState }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: JSON.parse(import.meta.env.VITE_DEF_REG_VAL || "{}"),
  });

  // const { onSubmit } = useAuthPage("registration");
  const { onSubmitAuth } = useAuthPage("registration", setIsLoading);

  return (
    <>
      <h2>Registration</h2>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form
        onSubmit={handleSubmit((data) => onSubmitAuth(data, "registration"))}
      >
        <Field
          name="name"
          register={register}
          getValues={getValues}
          errors={errors}
          options={{
            required: "required",
            minLength: {
              value: 2,
              message: `must be 2 chars`,
            },
          }}
        />
        <Field
          name="email"
          register={register}
          getValues={getValues}
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
        <Button text="register" size="form_button" disabled={isLoading} />
      </form>
      {/* <div className={styles.create_account}>
        <div>
          Already have account?
          <span
            className={styles.register_button}
            onClick={() => changeAuthState()}
          >
            Sign in!
          </span>
        </div>
      </div> */}
    </>
  );
}
