import { useForm } from "react-hook-form";
import Button from "../../ui/button/Button";
import Field from "../../ui/form-elements/Field";
import styles from "./Auth.module.scss";
import AuthService from "../../../services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterForm({ changeAuthState }) {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      name: "Vladislav",
      email: "mr.zgot1@yandex.ru",
      password: "123456",
    },
    mode: "onChange",
  });

  const { setIsAuth, setUser } = useAuth();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (formData) => {
      AuthService.authUser(formData, "registration");
    },
    onSuccess: () => {
      setIsAuth(true);
      reset();
      navigate("/profile");
    },
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <>
      {/* <div className="test">{isLoading && <h2>isLoading...</h2>}</div>
      <div className="test">{data && <h2>data ready</h2>}</div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button text="register" type="form_button" />
      </form>
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
    </>
  );
}
