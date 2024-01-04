import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import useProfile from "../components/screens/profile/useProfile";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get("token"));
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState(null);

  // useEffect(() => {
  //   console.log("user changed");
  // }, [user]);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, user, setUser, todos, setTodos }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
