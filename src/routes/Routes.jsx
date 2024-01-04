import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routesData } from "./routes-data";
import { useAuth } from "../components/hooks/useAuth";
import useProfile from "../components/screens/profile/useProfile";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function Router() {
  const { isAuth } = useAuth();
  const { refetch } = useProfile();

  useEffect(() => {
    // console.log("isAuth", isAuth);
    // console.log("token", Cookies.get("token"));

    if (isAuth) {
      // console.log("fire!");
      refetch();
    }
  }, [isAuth]);

  return (
    <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          {routesData.map((route) => {
            if (route.private && !isAuth) {
              return false;
            }

            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
