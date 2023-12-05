import { useForm } from "react-hook-form";
import Field from "../../ui/form-elements/Field";
import styles from "./NewTodo.module.scss";
import Button from "../../ui/button/Button";
import TextArea from "../../ui/form-elements/TextArea";
import { useMutation } from "@tanstack/react-query";

export default function NewTodo() {
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

  const onSubmit = (formData) => {
    // console.log(formData);
    mutate(formData);
  };

  const { mutate } = useMutation({
    mutationFn: () => {
      return console.log(123);
    },
  });

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
        {/* //! переделать на react SELECT */}
        <Field
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
        />
        <TextArea
          placeholder="comment"
          register={register}
          getValues={getValues}
          name="comment"
          isRequired={false}
          errors={errors}
        />
        {/* <textarea {...register("comment")}></textarea> */}
        <Button text="create"></Button>
      </form>
    </div>
  );
}
