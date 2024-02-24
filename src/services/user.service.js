import { useAuth } from "../components/hooks/useAuth";
import { $axios } from "./api";

//* getProfile|updateProfile|?getTodos?
export default function UserService() {
  function testUser(data) {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }

  function getProfile() {
    // const newUserData = await $axios.get(`/users/profile`);
    console.log("user принят", newUserData);
    // setUser(newUserData);
  }
}
