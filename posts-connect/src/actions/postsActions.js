export const getPosts = () => ({
  type: "GET_POSTS",
});

export const getPostsFailure = () => ({
  type: "GET_POSTS_FAILURE",
});

export const getPostsSucess = (posts) => ({
  type: "GET_POSTS_SUCCESS",
  payload: posts,
});

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      let resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await resp.json();
      dispatch(getPostsSucess(data));
    } catch (err) {
      dispatch(getPostsFailure());
    }
  };
}
