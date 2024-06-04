let initaialState = {
  loading: false,
  posts: [],
  hasError: false,
};

const PostsReducer = (state = initaialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, loading: true };

    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
        loading: false,
        hasError: false,
      };
  }
};
export default PostsReducer;
