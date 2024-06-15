import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
// eslint-disable-next-line react/prop-types
const Posts = ({ dispatch, posts }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log("postspostsposts", posts);
  return <div>Posts</div>;
};
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(Posts);
