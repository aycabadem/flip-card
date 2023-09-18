import { createSlice } from "@reduxjs/toolkit";

 export const authSlice = createSlice({
    name: "authSlice",
    initialState: {
      isloggedIn: false,
    },
    reducers: {
      login: (state) => {
        state.isloggedIn = true;
      },
      logout: (state) => {
        state.isloggedIn = false;
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;