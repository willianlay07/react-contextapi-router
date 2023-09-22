import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import PostLayout from "./component/PostLayout";
import Post from "./page/Post";
import PageNotFound from "./page/PageNotFound";
import IndividualPost from "./page/IndividualPost";
import { PostProvider } from "./context/PostProvider";

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<PostLayout />}>
            <Route index element={<Post />} />
            <Route path=":id" element={<IndividualPost />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
};

export default App;
