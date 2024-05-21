import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setIsAuthOn,
  setUser,
} from "../../../store/features/userSlice/userSlice";
import {
  useAuthMutation,
  useRegistrationMutation,
} from "../../../store/api/todoApi";
import Cookies from "js-cookie";
import { setTodos } from "../../../store/features/todoSlice/todoSlice";
import { toast } from "react-toastify";
import useToastPromise from "../../hooks/useToastPromise";
import { useEffect } from "react";

const useAuthPage = (type, setIsLoading) => {
  const navigate = useNavigate();
  const { reset } = useForm();
  const dispatch = useDispatch();
  const [login, loginResult] = useAuthMutation();
  const [registration, RegistrationResult] = useRegistrationMutation();

  const onSubmitAuth = (formData, type) => {
    setIsLoading(true);

    const toastPromise = useToastPromise(
      (type === "login" ? login(formData) : registration(formData)).unwrap(),
      type
    );
    toastPromise()
      .then((resp) => {
        Cookies.set("token", resp.token, { expires: 7 });
        dispatch(setUser(resp));
        dispatch(setTodos(resp));
        navigate("/profile");
      })
      .catch((rejected) => console.error(rejected))
      .finally(() => setIsLoading(false));
  };

  return { onSubmitAuth };
};

export default useAuthPage;
