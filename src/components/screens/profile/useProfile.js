import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { $axios } from "../../../services/api";
import Cookies from "js-cookie";
import axios from "axios";

const useProfile = () => {
  const { setUser } = useAuth();

  async function getProfile() {
    const token = Cookies.get("token");
    if (token) {
      const resp = await axios.get(`users/profile`, {
        baseURL: import.meta.env.VITE_SERVER_URL,
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token")
            ? `Bearer ${Cookies.get("token")}`
            : "",
        },
      });
      console.log(resp.data.todos);
      setUser(resp?.data);
      return resp;
    }
    return false;
  }

  return useQuery({
    queryKey: ["get profile"],
    queryFn: () => getProfile(),
    select: (data) => data.data,
    enabled: false,
  });
};

export default useProfile;
