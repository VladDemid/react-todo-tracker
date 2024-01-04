import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
};

//* userData + isAuth
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthOn(state) {
      console.log("true");
      state.isAuth = true;
    },
    setIsAuthOff(state) {
      state.isAuth = false;
    },
  },
});

export const { setIsAuthOn, setIsAuthOff } = userSlice.actions;

export default userSlice.reducer;
