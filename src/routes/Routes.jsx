import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routesData } from "./routes-data";
import { useAuth } from "../components/hooks/useAuth";
import useProfile from "../components/screens/profile/useProfile";

export default function Router() {
  const { isAuth, setIsAuth } = useAuth();
  useProfile();

  return (
    <BrowserRouter>
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
