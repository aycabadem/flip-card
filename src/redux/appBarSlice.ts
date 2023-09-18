import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IappBarSlice{
  index: number;
}
const initialState : IappBarSlice = {
    index:0
}

 export const appBarSlice = createSlice({

    name: "appBarSlice",
    initialState,
    reducers: {
      updateIndex: (state, action:PayloadAction<number>) => {
       state.index = action.payload
      },
    
    },
  });
  
  export const { updateIndex } = appBarSlice.actions;