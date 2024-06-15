import { useEffect } from "react";
import { fetchPosts } from "../slices/PostsSlice";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";

const Posts = () => {
  const { posts, loading } = useSelector((state) => state.Posts);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("fetchPosts called");
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log("posts", posts);
  if (loading) {
    return <h1>...Loading</h1>;
  }
  return (
    <div style={{ padding: "10px 20px" }}>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Posts;
