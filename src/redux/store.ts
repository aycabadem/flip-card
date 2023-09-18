import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { appBarSlice } from "./appBarSlice";


const reducers = combineReducers({authReducer : authSlice.reducer, appReducer: appBarSlice.reducer });


export const store = configureStore({
  reducer: reducers,


});
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch