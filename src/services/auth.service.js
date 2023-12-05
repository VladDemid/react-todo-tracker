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
      // const { data } = await $axios.post(`auth/loginn`, formData);
      console.log("axios data: ", data);
      if (data.token) Cookies.set("token", data.token);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default AuthService;
