import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const DashboardLayout = () => {
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
            <ul className="menu p-4 w-80 text-base-content">
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
              </>
              <>
                <li>
                  <Link>Add A Products</Link>
                </li>
                <li>
                  <Link>My Products</Link>
                </li>
              </>
              <>
                <li>
                  <Link>All Sellers</Link>
                </li>
                <li>
                  <Link>All Buyers</Link>
                </li>
              </>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;