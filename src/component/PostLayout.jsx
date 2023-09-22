import { Outlet } from "react-router-dom";

import Nav from "../component/Nav";

const PostLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default PostLayout;
