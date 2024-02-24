import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { UserSlice } from "../../../types/user.types";

let initialState: UserSlice = {
  isAuth: !!Cookies.get("token"), //! true -> false не работает без перезагрузки
  user: null,
  isLoading: false,
  error: false,
};

//* userData + isAuth
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthOn(state) {
      state.isAuth = true;
    },
    setIsAuthOff(state) {
      state.isAuth = false;
    },
    setUser(state, action) {
      state.user = action.payload.userData;
      state.isAuth = true;
    },
    // login(state, action) {
    //   state.user = action.payload.userData
    //   state.isAuth = true;
    // },
    logOut(state) {
      Cookies.remove("token");
      return initialState;
    },
  },
});

export const { setIsAuthOn, setIsAuthOff, setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
