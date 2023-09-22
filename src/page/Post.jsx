import PostList from "../component/PostList";
import Loading from "../component/Loading";
import Error from "../component/Error";
import { usePost } from "../context/PostProvider";

const Post = () => {
  const { isLoading, isError, posts } = usePost();

  return (
    <div>
      <h1>Post</h1>
      {isLoading ? <Loading /> : <PostList posts={posts} />}
      {isError.length > 0 && <Error message={isError} />}
    </div>
  );
};

export default Post;
