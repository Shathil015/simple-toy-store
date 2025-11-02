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
]);

export default router;
