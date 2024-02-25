export interface UserSlice {
  isAuth: boolean;
  user: User | null;
  isLoading: boolean;
  error: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

// type Union = User & UserSlice;

// let union: Union = {
//   id: "dgf",
//   name: "",
//   email: "",
//   created_at: "",
//   updated_at: "",
//   isAuth: false,
//   user: null,
//   isLoading: false,
//   error: false,
// };
