import { Link } from "react-router-dom";

const PostListItem = ({ id, title, body }) => {
  return (
    <>
      <li>
        <h1 style={{ fontWeight: "bold" }}>
          <Link to={`${id}`}>{title}</Link>
        </h1>
        <p>{body}</p>
      </li>
    </>
  );
};

export default PostListItem;
