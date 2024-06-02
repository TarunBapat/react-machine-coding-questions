import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import SinglePost from "./components/SinglePost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/posts/:postId",
      element: <SinglePost />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
