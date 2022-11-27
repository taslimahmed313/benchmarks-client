import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isAdmin] = useAdmin(user?.email);    
    
    return (
      <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 font-serif text-xs font-semibold uppercase ">
              {isBuyer && (
                <>
                  <li>
                    <Link>My Orders</Link>
                  </li>
                </>
              )}
              {isSeller && (
                <>
                  <li>
                    <Link
                      className="hover:bg-gradient-to-r from-sky-300 to-indigo-300"
                      to="/dashboard/seller/addAProduct"
                    >
                      Add A Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" hover:bg-gradient-to-r from-sky-300 to-indigo-300"
                      to="/dashboard/seller/myProducts"
                    >
                      My Products
                    </Link>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li>
                    <Link
                      className=" hover:bg-gradient-to-r from-sky-300 to-indigo-300"
                      to="/dashboard/admin/allBuyers"
                    >
                      All Buyers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" hover:bg-gradient-to-r from-sky-300 to-indigo-300"
                      to="/dashboard/admin/allSellers"
                    >
                      All Sellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" hover:bg-gradient-to-r from-sky-300 to-indigo-300"
                      to="/dashboard/admin/reportedItems"
                    >
                      Reported Items
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default DashboardLayout;