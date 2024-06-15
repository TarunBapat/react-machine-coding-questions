import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loading: false,
  post: [],
  hasError: false,
};
const PostSlice = createSlice({
  name: "Post",
  initialState: initialState,
  reducers: {
    getPost: (state) => {
      state.loading = true;
    },
    getPostSuccess: (state, { payload }) => {
      state.post = payload;
      state.loading = false;
      state.hasError = false;
    },
    getPostFailure: (state) => {
      state.hasError = true;
    },
  },
});

export default PostSlice.reducer;
export const { getPost, getPostFailure, getPostSuccess } = PostSlice.actions;

export const fetchPost = (id) => {
  return async (dispatch) => {
    dispatch(getPost());
    try {
      let resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      let data = await resp.json();
      dispatch(getPostSuccess(data));
    } catch (err) {
      dispatch(getPostFailure);
    }
  };
};
