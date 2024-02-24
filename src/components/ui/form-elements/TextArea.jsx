import { useForm } from "react-hook-form";
import styles from "./Forms.module.scss";

export default function TextArea({
  register,
  name,
  options,
  errors,
  getValues,
  placeholder,
  type = "text",
}) {
  return (
    <div className={styles.input_wrapper}>
      <textarea
        placeholder={placeholder}
        type={type}
        className={styles.input}
        // placeholder={name}
        {...register(name, options)}
      />
      {/* <div
        className={`${styles.floating_label} ${
          getValues(name) ? styles.active : ""
        }`}
      >
        {name}
      </div> */}

      {/* <span className={styles.floating_label}>login</span> */}
      <div className={styles.error}>{errors[name]?.message}</div>
    </div>
  );
}
