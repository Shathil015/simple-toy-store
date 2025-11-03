import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Home-layout/HomeLayout";
import Home from "../pages/Home";
import CategoriesToy from "../pages/CategoriesToy";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/Home-layout/AuthLayout";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "../provider/PrivateRoute";

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
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login>I am login</Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/product-details/:id",
    element: (
      <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/products.json"),
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
