import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { $axios } from "../../../services/api";
import Cookies from "js-cookie";

const useProfile = () => {
  const { user, setUser } = useAuth();
  async function getProfile() {
    const token = Cookies.get("token");
    if (token) {
      const resp = await $axios.get(`users/profile`);
      setUser(resp?.data.securedUser);
      return resp;
    }
    return false;
  }

  useQuery({
    queryKey: ["get profile"],
    queryFn: () => getProfile(),
    select: (data) => data.data,
    enabled: true,
  });
};

export default useProfile;
