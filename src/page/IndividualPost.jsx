import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../component/Loading";
import Error from "../component/Error";
import { usePost } from "../context/PostProvider";

const IndividualPost = () => {
  const { id } = useParams();

  const { title, body, fetchIndividialPost, isLoading, isError } = usePost();

  useEffect(() => {
    fetchIndividialPost(id);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>Individual Post</h1>
          <p>Title: {title}</p>
          <p>Body: {body}</p>
        </>
      )}

      {isError.length > 0 && <Error message={isError} />}
    </div>
  );
};

export default IndividualPost;
