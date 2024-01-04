import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { IoArrowBack, IoClose, IoMenu } from "react-icons/io5";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { backLinks } from "../../hooks/routeInfo";
import { useAuth } from "../../hooks/useAuth";
import useMenu from "./useMenu";

export default function Header() {
  const { isShow, ref, setIsShow } = useOnClickOutside(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { menuList } = useMenu();

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
