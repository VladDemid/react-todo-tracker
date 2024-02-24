import { IoCheckmark, IoCloseOutline } from "react-icons/io5";
import styles from "./BackgroundMain.module.scss";

const BackgroundMain = () => {
  return (
    <div className={styles.area}>
      <ul className={styles.circles}>
        <li>
          <IoCheckmark />
        </li>
        <li>
          <IoCheckmark />
        </li>
        <li>
          <IoCloseOutline />
        </li>
        <li>
          <IoCloseOutline />
        </li>
        <li>
          <IoCloseOutline />
        </li>
        <li>
          <IoCheckmark />
        </li>
        <li>
          <IoCheckmark />
        </li>
        <li>
          <IoCloseOutline />
        </li>
        <li>
          <IoCheckmark />
        </li>
        <li>
          <IoCheckmark />
        </li>
      </ul>
    </div>
  );
};

export default BackgroundMain;
