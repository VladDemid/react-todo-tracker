import { useForm } from "react-hook-form";
import Button from "../../ui/button/Button";
import Field from "../../ui/form-elements/Field";
import styles from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useAuth } from "../../hooks/useAuth";
import AuthService from "../../../services/auth.service";

export default function LoginForm({ changeAuthState }) {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "mr.zgot@yandex.ru",
      password: "123456",
    },
    mode: "onChange",
  });

  const navigate = useNavigate();
  const { setIsAuth, setUser } = useAuth();

  const { data, mutate, mutateAsync } = useMutation({
    mutationFn: (formData) => {
      return AuthService.authUser(formData, "login");
    },
    mutationKey: ["login"],
    onSuccess: () => {
      console.log("useMutate onSuccess");
      setIsAuth(true);
      reset();
      navigate("/profile");
    },
    onError: () => {
      console.log("useMutate onError");
    },
  });

  const onSubmit = async (formData) => {
    console.log("start onSubmit");
    mutateAsync(formData, {
      onSuccess: () => {
        console.log("mutate onSuccess");
      },
      onError: () => {
        console.log("mutate onError!");
      },
    })
      .then(() => {
        console.log("then");
      })
      .catch((err) => {
        console.log("catch");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button text="sign in" type="form_button" />
      </form>
      <div className={styles.create_account}>
        <div>
          Dont have an account?
          <span
            className={styles.register_button}
            onClick={() => changeAuthState()}
          >
            Register!
          </span>
        </div>
      </div>
    </>
  );
}
