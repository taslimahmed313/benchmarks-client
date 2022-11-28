import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/Signup/Signup";
import Blog from "../Pages/Blog/Blog";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks/CategoryBooks";
import AddAProduct from "../Pages/Dashboard/AddAProduct/AddAProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AdminRouter from "./AdminRouter/AdminRouter";
import BuyerRouter from "./BuyerRouter/BuyerRouter";
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
        path: "/category/:name",
        element: (
          <PrivateRoute>
            <CategoryBooks></CategoryBooks>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.name}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
        path: "/dashboard/buyer/myOrders",
        element: (
          <BuyerRouter>
            <MyOrders></MyOrders>
          </BuyerRouter>
        ),
      },
      {
        path: "/dashboard/seller/addAProduct",
        element: (
          <SellerRouter>
            <AddAProduct></AddAProduct>
          </SellerRouter>
        ),
      },
      {
        path: "/dashboard/seller/myProducts",
        element: (
          <SellerRouter>
            <MyProducts></MyProducts>
          </SellerRouter>
        ),
      },
      {
        path: "/dashboard/admin/allBuyers",
        element: (
          <AdminRouter>
            <AllBuyers></AllBuyers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/admin/allSellers",
        element: (
          <AdminRouter>
            <AllSellers></AllSellers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/admin/reportedItems",
        element: <AdminRouter><ReportedItems></ReportedItems></AdminRouter>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);