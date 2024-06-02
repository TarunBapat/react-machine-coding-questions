import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ title, body, id }) => {
  return (
    <div style={{ background: "green", padding: "10px 10px", margin: "5px 0" }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/posts/${id}`} className="button">
        View Post
      </Link>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
};
export default Post;
