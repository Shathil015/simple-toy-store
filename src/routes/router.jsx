import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Home-layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "auth",
    element: <h1>Auth layout</h1>,
  },
  {
    path: "dashboard",
    element: <h1>Dashboard layout</h1>,
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
