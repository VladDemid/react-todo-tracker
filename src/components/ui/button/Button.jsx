import { useNavigate } from "react-router-dom";
import styles from "./Button.module.scss";

export default function Button({ text, type = "regular", link }) {
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
      className={`${styles.button} ${styles[type]}`}
      onClick={() => buttonNavigate()}
    >
      {text}
    </button>
  );
}
