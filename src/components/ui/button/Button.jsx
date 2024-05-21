import { useNavigate } from "react-router-dom";
import styles from "./Button.module.scss";
import clsx from "clsx";

export default function Button({
  text,
  size = "regular",
  link,
  disabled = false,
}) {
  const navigate = useNavigate();

  const buttonNavigate = () => {
    if (link) {
      navigate(`${link}`);
      // console.log(link);
    }
    return;
  };

  return (
    <button
      disabled={disabled}
      className={clsx(styles.button, styles[size], "button")}
      onClick={() => buttonNavigate()}
    >
      {text}
    </button>
  );
}
