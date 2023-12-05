import { useForm } from "react-hook-form";
import styles from "./Forms.module.scss";

export default function Field({
  register,
  name,
  tip,
  options,
  errors,
  getValues,
  type = "text",
}) {
  return (
    <div className={styles.input_wrapper}>
      <input
        type={type}
        className={styles.inputText}
        // placeholder={name}
        {...register(name, options)}
      />
      <div
        className={`${styles.floating_label} ${
          getValues(name) ? styles.active : ""
        }`}
      >
        {tip || name}
      </div>

      {/* <span className={styles.floating_label}>login</span> */}
      <div className={styles.error}>{errors[name]?.message}</div>
    </div>
  );
}
