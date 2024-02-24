import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
import Button from "../../ui/button/Button";

export default function NotFound() {
  return (
    <div className={styles.not_found}>
      <h1>404 Not Found</h1>
      <p>Not found or authorization required</p>
      <Button text="to home page" link="/"></Button>
    </div>
  );
}
