import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
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
            <ul className="menu p-4 w-80 ">
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
                    <Link to="/dashboard/seller/addAProduct">
                      Add A Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/seller/myProducts">My Products</Link>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/admin/allBuyers">All Buyers</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/admin/allSellers">All Sellers</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;