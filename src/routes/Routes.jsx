import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routesData } from "./routes-data";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { todoApi } from "../store/api/todoApi";
import { setUser } from "../store/features/userSlice/userSlice";
import { setTodos } from "../store/features/todoSlice/todoSlice";

export default function Router() {
  const [getProfile, result, lastPromiseInfo] =
    todoApi.useLazyGetProfileQuery();
  const dispatch = useDispatch();

  const refetch = () => {
    //получить данные профиля в случае перезагрузки страницы
    getProfile()
      .unwrap()
      .then((resp) => {
        dispatch(setTodos(resp));
        dispatch(setUser(resp));
      })
      .catch((err) => console.error(err));
  };
  // const dispatch = useDispatch()
  // dispatch(useGetProfileQuery())
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (isAuth) {
      refetch();
    }
  }, [isAuth]);

  return (
    <BrowserRouter>
      <ToastContainer autoClose={1300} style={{}} />
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
