import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import useProfile from "../components/screens/profile/useProfile";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get("token"));
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
