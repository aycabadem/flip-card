import { createSlice } from "@reduxjs/toolkit";
import { User } from "../firebaseSetup";

interface IAuthSlice {
  user?: User;
  isloggedIn: boolean;
}
const initialState: IAuthSlice = {
  isloggedIn: false,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isloggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isloggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
