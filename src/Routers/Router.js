import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/Signup/Signup";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks/CategoryBooks";
import AddAProduct from "../Pages/Dashboard/AddAProduct/AddAProduct";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home/Home";
import PrivateRoute from "./PrivateRouter/PrivateRouter";
import SellerRouter from "./SellerRouter/SellerRouter";

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
        element: (
          <PrivateRoute>
            <CategoryBooks></CategoryBooks>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/seller/addAProduct",
        element: <SellerRouter><AddAProduct></AddAProduct></SellerRouter>
      },
      {
        path: "/dashboard/seller/myProducts",
        element: <SellerRouter><MyProducts></MyProducts></SellerRouter>
      }
    ],
  },
]);