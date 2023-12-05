import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "./header/Header";
import Background_main from "./background_main/Background_main";
import { headings } from "../hooks/routeInfo";

export default function Layout() {
  const location = useLocation();

  return (
    <section className={styles.layout_wrapper}>
      {location.pathname !== "/" && location.pathname !== "/auth" && <Header />}
      <h2>{headings[location.pathname]}</h2>
      {/* {children && <div>{children}</div>} */}
      <main>
        <Outlet />
      </main>
      <Background_main />
    </section>
  );
}
