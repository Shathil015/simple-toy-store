import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Home-layout/HomeLayout";
import Home from "../pages/Home";
import CategoriesToy from "../pages/CategoriesToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoriesToy></CategoriesToy>,
        loader: () => fetch("/products.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/toy",
    element: <h2>Toy Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
