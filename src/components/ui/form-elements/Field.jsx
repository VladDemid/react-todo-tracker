import { useForm } from "react-hook-form";
import styles from "./Forms.module.scss";
import { LuEye } from "react-icons/lu";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useEffect, useState } from "react";

export default function Field({
  register,
  name,
  tip,
  options,
  errors,
  getValues,
  type = "text",
}) {
  const [passType, setPassType] = useState(type);

  return (
    <div className={styles.input_wrapper}>
      <input
        type={passType}
        id={name}
        className={styles.input}
        // placeholder={name}
        {...register(name, options)}
      />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
      <div
        className={`${styles.floating_label} ${
          getValues(name) ? styles.active : ""
        }`}
      >
        {tip || name}
      </div>
      {type === "password" && (
        <div
          className={styles.uncover_eye}
          onMouseDown={() => setPassType("text")}
          onMouseUp={() => setPassType("password")}
          onMouseLeave={() => setPassType("password")}
        >
          {/* <LuEye /> */}
          {passType === "password" ? (
            <AiOutlineEyeInvisible />
          ) : (
            <AiOutlineEye />
          )}
        </div>
      )}
      {/* <span className={styles.floating_label}>login</span> */}
      {type !== "checkbox" && (
        <div className={styles.error}>{errors[name]?.message}</div>
      )}
    </div>
  );
}
