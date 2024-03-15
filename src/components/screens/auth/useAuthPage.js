import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setIsAuthOn,
  setUser,
} from "../../../store/features/userSlice/userSlice";
import { useAuthMutation } from "../../../store/api/todoApi";
import Cookies from "js-cookie";
import { setTodos } from "../../../store/features/todoSlice/todoSlice";
import { toast } from "react-toastify";
import useToastPromise from "../../hooks/useToastPromise";
import { useEffect } from "react";

const useAuthPage = (type, setIsLoading) => {
  const navigate = useNavigate();
  const { reset } = useForm();
  const dispatch = useDispatch();
  const [login, result] = useAuthMutation();
  // const toastPromise = useToastPromise();

  const onSubmitAuth = (formData, type) => {
    setIsLoading(true);
    const toastPromise = useToastPromise(login(formData).unwrap(), "Login");
    toastPromise()
      .then((resp) => {
        Cookies.set("token", resp.token, { expires: 7 });
        dispatch(setUser(resp));
        dispatch(setTodos(resp.todos));
        navigate("/profile");
      })
      .catch((rejected) => console.error(rejected))
      .finally(() => setIsLoading(false));
  };

  return { onSubmitAuth };
};

export default useAuthPage;
