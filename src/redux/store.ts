import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { appBarSlice } from "./appBarSlice";
import { wordsSlice } from "./wordsSlice";


const reducers = combineReducers({authReducer : authSlice.reducer, appReducer: appBarSlice.reducer , wordReducer: wordsSlice.reducer});


export const store = configureStore({
  reducer: reducers,


});
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch