import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "./header/Header";
import { headings } from "../hooks/routeInfo";
import { useSelector } from "react-redux";
// import BackgroundMain from "./background_main/BackgroundMain";
import Sidebar from "./sidebar/Sidebar";
import BackgroundMain from "./backgroundMain/BackgroundMain";
import { RootState } from "../../store/store";

export default function Layout() {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user?.user);
  const isProfilePage =
    location.pathname !== "/" && location.pathname !== "/auth";

  return (
    <div className={styles.layout_wrapper}>
      {isProfilePage && <Header />}
      {isProfilePage && <Sidebar />}
      {/* {headings[location.pathname] && <h2>{headings[location.pathname]}</h2>} */}
      {/* {children && <div>{children}</div>} */}
      <main>
        <Outlet />
      </main>

      {/* <div className={styles.name}>layout - {String(user?.name)}</div> */}
      {<BackgroundMain />}
    </div>
  );
}
