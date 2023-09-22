import { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchAllPost = async () => {
      setIsLoading(true);
      setIsError("");

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Something went wrong! Please try again!");

        const data = await res.json();

        setIsLoading(false);
        setPosts(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setIsLoading(false);
          setIsError(error.message);
        }
      }
    };
    fetchAllPost();

    return () => {
      controller.abort();
    };
  }, []);

  async function fetchIndividialPost(id) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!res.ok) throw new Error("Something went wrong! Please try again!");

      const data = await res.json();

      setIsLoading(false);
      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      if (error.name !== "AbortError") {
        setIsLoading(false);
        setIsError(error.message);
      }
    }
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        isLoading,
        isError,
        title,
        body,
        fetchIndividialPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePost() {
  const context = useContext(PostContext);

  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider!");

  return context;
}

export { PostProvider, usePost };
