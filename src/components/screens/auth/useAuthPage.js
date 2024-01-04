import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { useAuth } from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setIsAuthOn } from "../../../store/userSlice/userSlice";

const useAuthPage = (type) => {
  const { setIsAuth, setUser } = useAuth();
  const navigate = useNavigate();
  const { reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData, type) => {
    mutate(formData, type);
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => {
      return AuthService.authUser(formData, type);
    },
    mutationKey: ["auth"],
    onSuccess: () => {
      setIsAuth(true); //! убрать
      reset();
      navigate("/profile");
    },
  });
  return { onSubmit };
};

export default useAuthPage;
