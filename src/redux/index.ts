import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import characterReducer from "./character/slice";
import movieReducer from "./movie/slice";
import authReducer from "./auth/slice";

const middleware = [thunk];

const store = configureStore({
  reducer: {
    character: characterReducer,
    auth: authReducer,
    movie: movieReducer,
  },
  middleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
