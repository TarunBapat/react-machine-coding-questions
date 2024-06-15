import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../slices/PostSlice";
import { fetchComments } from "../slices/CommentsSlice";

const SinglePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.Post);
  const { comments } = useSelector((state) => state.Comments);
  useEffect(() => {
    dispatch(fetchPost(postId));
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);
  if (loading) {
    return <h1>...Loading</h1>;
  }
  return (
    <>
      <div>
        <h3>Post {post.id} Details</h3>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
      <div>
        {comments.map((comment) => {
          return (
            <div
              key={comment.id}
              style={{
                background: "grey",
                margin: "10px 0",
                padding: "10px 10px",
              }}
            >
              <p>name:{comment.name}</p>
              <p>email:{comment.email}</p>
              <p>body:{comment.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SinglePost;
