import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./slices/PostsSlice";
import CommentReducer from "./slices/CommentsSlice";
import PostReducer from "./slices/PostSlice";

const store = configureStore({
  reducer: { Posts: PostsReducer, Comments: CommentReducer, Post: PostReducer },
});

export default store;
