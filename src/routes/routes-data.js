import Auth from "../components/screens/auth/Auth";
import Home from "../components/screens/home/Home";
import NewTodo from "../components/screens/newTodo/NewTodo";
import NotFound from "../components/screens/not-found/NotFound";
import Profile from "../components/screens/profile/Profile";

export const routesData = [
  {
    path: "/",
    element: Home,
    private: false,
  },
  {
    path: "auth",
    element: Auth,
    private: false,
  },
  {
    path: "profile",
    element: Profile,
    private: true,
  },
  {
    path: "new-todo",
    element: NewTodo,
    private: true,
  },

  // {
  //   path: "my-todos",
  //   element: Profile,
  //   private: true,
  // },
  {
    path: "*",
    element: NotFound,
    private: false,
  },
];
