import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  comments: [],
  loading: false,
  hasError: false,
};
const CommentSlice = createSlice({
  name: "CommentSlice",
  initialState: initialState,
  reducers: {
    getCommentsSuccess: (state, { payload }) => {
      state.comments = payload;
    },
    getComments: (state) => {
      state.loading = true;
    },
    getCommentsFailure: (state) => {
      state.hasError(true);
    },
  },
});

export default CommentSlice.reducer;

export const { getComments, getCommentsSuccess, getCommentsFailure } =
  CommentSlice.actions;

export function fetchComments(id) {
  return async (dispatch) => {
    dispatch(getComments());
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      const data = await resp.json();
      dispatch(getCommentsSuccess(data));
    } catch (err) {
      dispatch(getCommentsFailure());
    }
  };
}
