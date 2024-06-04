import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
