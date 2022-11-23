import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks/CategoryBooks";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryBooks></CategoryBooks>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);