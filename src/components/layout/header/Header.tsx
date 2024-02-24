import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { IoArrowBack, IoClose, IoMenu } from "react-icons/io5";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { backLinks } from "../../hooks/routeInfo";
import useMenu from "./useMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function Header() {
  const { isShow, ref, setIsShow } = useOnClickOutside(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { menuList } = useMenu();
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <header>
      <div className={styles.back_arrow}>
        <button
          className={styles.button}
          onClick={() => navigate(backLinks[location.pathname])}
        >
          <IoArrowBack />
        </button>
      </div>
      <div className={styles.name}>{user?.name}</div>
      <nav ref={ref} onClick={() => setIsShow(!isShow)}>
        <button>{isShow ? <IoClose /> : <IoMenu />}</button>
        {isShow && (
          <div className={styles.drop_menu}>
            {menuList.map((el) => {
              return (
                <li key={el.title} onClick={el.onClickFn}>
                  <Link className={styles.link} to={el.link}>
                    {el.title}
                  </Link>
                </li>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
