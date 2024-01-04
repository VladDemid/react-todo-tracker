// import axios from "axios";
import axios from "axios";
import { $axios } from "./api.js";
import Cookies from "js-cookie";
import { useAuth } from "../components/hooks/useAuth.js";

//* register|login|logout
const AuthService = {
  async authUser(formData, type) {
    try {
      const { data } = await $axios.post(`auth/${type}`, formData);

      if (data.token) {
        Cookies.set("token", data.token, { expires: 7 });
        console.log("token was set", data.token.slice(0, 10));
      } else {
        console.log("token NOT FOUND");
      }
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default AuthService;
