// import * as actions from '../actions/postsActions'

let initialState = {
  loading: false,
  posts: [],
  hasError: false,
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, loading: true };

    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        loading: false,
        hasError: false,
      };
    case "GET_POSTS_FAILURE":
      return { ...state, hasError: true };
    default:
      return state;
  }
};
export default PostsReducer;
