import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  posts: [],
  loading: false,
  hasError: false,
};

const PostsSlice = createSlice({
  name: "PostsSlice",
  initialState: initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
      state.hasError = false;
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export default PostsSlice.reducer;

export const { getPosts, getPostsSuccess, getPostsFailure } =
  PostsSlice.actions;

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await resp.json();
      console.log("data", data);
      dispatch(getPostsSuccess(data));
    } catch (err) {
      dispatch(getPostsFailure(err));
    }
  };
}
