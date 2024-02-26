import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { IoArrowBack, IoClose, IoMenu } from "react-icons/io5";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { backLinks } from "../../hooks/routeInfo";
import useMenu from "./useMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import clsx from "clsx";

export default function Header() {
  const { isShow, ref, setIsShow } = useOnClickOutside(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { menuList } = useMenu();
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <header>
      <div className={styles.back_arrow}>
        <button
          className={clsx(styles.button, "button")}
          onClick={() => navigate(backLinks[location.pathname])}
        >
          <IoArrowBack />
        </button>
      </div>
      <div className={styles.name}>{user?.name}</div>
      <nav
        className={styles.header_nav}
        ref={ref}
        onClick={() => setIsShow(!isShow)}
      >
        <button className={clsx(styles.button, "button")}>
          {isShow ? <IoClose /> : <IoMenu />}
        </button>
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
