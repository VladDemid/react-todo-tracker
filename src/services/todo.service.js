import { useAuth } from "../components/hooks/useAuth";
import { $axios } from "./api";

//* getProfile|updateProfile|?getTodos?
const { todos, setTodos } = useAuth();
const TodoService = {
  getProfile() {
    // const newUserData = await $axios.get(`/users/profile`);
    console.log("user принят", newUserData);
    // setUser(newUserData);
  },

  async createTodo(todoData) {
    try {
      const { data } = $axios.post(`todos/`, todoData);
      console.log(data);
      return data;
    } catch (err) {
      throw new Error("Todo:", err);
    }
  },
};

export default TodoService;
