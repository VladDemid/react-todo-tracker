import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { IoArrowBack, IoClose, IoMenu } from "react-icons/io5";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useLocation, useNavigate } from "react-router-dom";
import { backLinks } from "../../hooks/routeInfo";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  // const [menu, setMenu] = useState(false);
  const { isShow, ref, setIsShow } = useOnClickOutside(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   console.log("user: ", user);
  // }, [user]);

  return (
    <header>
      <div
        className={styles.back_arrow}
        onClick={() => navigate(backLinks[location.pathname])}
      >
        <IoArrowBack />
      </div>
      <div className={styles.name}>{user?.name}</div>
      <nav ref={ref} onClick={() => setIsShow(!isShow)}>
        {isShow ? <IoClose /> : <IoMenu />}
        {isShow && <div className={styles.drop_menu}>123</div>}
      </nav>
    </header>
  );
}
