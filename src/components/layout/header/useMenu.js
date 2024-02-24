import Cookies from "js-cookie";
import { logOut } from "../../../store/features/userSlice/userSlice";
import { useDispatch } from "react-redux";

const useMenu = () => {
  const dispatch = useDispatch();

  const onExit = () => {
    dispatch(logOut());
  };

  const menuList = [
    { title: "create new", link: "new-todo" },
    { title: "my todos", link: "my-todos" },
    { title: "exit", link: "/", onClickFn: onExit },
  ];

  return { onExit, menuList };
};

export default useMenu;
