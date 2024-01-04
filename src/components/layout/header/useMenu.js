import Cookies from "js-cookie";
import { useAuth } from "../../hooks/useAuth";

const useMenu = () => {
  const { setIsAuth, setUser } = useAuth();

  const onExit = () => {
    Cookies.remove("token");
    setIsAuth(false);
    setUser(null);
  };

  const menuList = [
    { title: "create", link: "new-todo" },
    { title: "my todos", link: "new-todo" },
    { title: "exit", link: "/", onClickFn: onExit },
  ];

  return { onExit, menuList };
};

export default useMenu;
