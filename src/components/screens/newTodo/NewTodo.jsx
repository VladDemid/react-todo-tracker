import { useForm } from "react-hook-form";
import Field from "../../ui/form-elements/Field";
import styles from "./NewTodo.module.scss";
import Button from "../../ui/button/Button";
import TextArea from "../../ui/form-elements/TextArea";
import TodoService from "../../../services/todo.service";
import useToastPromise from "../../hooks/useToastPromise";
import { useDispatch } from "react-redux";
import { useAddTodoMutation } from "../../../store/api/todoApi";
import { addTodoReducer } from "../../../store/features/todoSlice/todoSlice";
import { useState } from "react";

export default function NewTodo() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "My title",
      duration: "10",
      theme: "theme",
      comment: "My comment test test test",
    },
    mode: "onChange",
  });
  const [addTodo, addResult] = useAddTodoMutation();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    const toastPromise = useToastPromise(
      addTodo(formData).unwrap(),
      "add todo"
    );

    setIsLoading(true);
    toastPromise()
      .then((resp) => {
        console.log("resp:", resp);
        dispatch(addTodoReducer(resp));
      })
      .catch((err) => {
        throw new Error("Add todo error:", err);
      })
      .finally(() => setIsLoading(false));
  };

  // duration | todo_type (выбирается из набора) | comment
  return (
    <div className={styles.new_todo}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          register={register}
          getValues={getValues}
          name="title"
          isRequired={true}
          options={{
            required: "required",
            minLength: {
              value: 3,
              message: `must be 3 chars`,
            },
          }}
          errors={errors}
        />
        <div className={styles.input_pair}>
          <Field
            type="number"
            register={register}
            getValues={getValues}
            name="duration"
            tip="duration [min]"
            isRequired={true}
            options={{
              required: "required",
              min: {
                value: 5,
                message: `must be no less than 5`,
              },
            }}
            errors={errors}
          />
          <Field
            type="checkbox"
            register={register}
            getValues={getValues}
            name="no timer"
          />
        </div>
        {/* //! переделать на react SELECT  */}
        {/* //* временно убрано */}
        {/* <Field
          register={register}
          getValues={getValues}
          name="theme"
          isRequired={true}
          options={{
            required: "required",
            minLength: {
              value: 2,
              message: `must be 2 chars`,
            },
          }}
          errors={errors}
        /> */}
        <TextArea
          placeholder="Comment"
          register={register}
          getValues={getValues}
          name="comment"
          isRequired={false}
          errors={errors}
        />
        {/* <textarea {...register("comment")}></textarea> */}
        <Button text="create" disabled={isLoading}></Button>
      </form>
    </div>
  );
}
