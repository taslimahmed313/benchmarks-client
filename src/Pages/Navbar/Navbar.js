import React, { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import logo from "../../logo/research.png";
import "./Navbar.css";

const Navbar = () => {
  
  const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
      logOut()
        .then(() => {})
        .catch((err) => console.log(err));
    };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="p-3 m-3 nav-route" to="/">
          Home
        </Link>
        <Link className="p-3 m-3 nav-route" to="/blog">
          Blog
        </Link>
      </li>
    </React.Fragment>
  );

  console.log(user)

  const endItems = (
    <React.Fragment>
      <>
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                <img
                  className="w-12 h-12 cursor-pointer hover:opacity-80 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                {/* <p>{user.displayName}</p> */}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg w-60"
              >
                <li>
                  <span className="p-2 m-2 w-full nav-route">
                    {/* <FaUserAlt /> */}
                    <img
                      className="w-8 h-8 rounded-full "
                      src={user.photoURL}
                      alt=""
                    />
                    {user.displayName}
                  </span>
                </li>
                <hr />
                <li>
                  <Link className="p-2 m-2 w-full private" to="/dashboard">
                    <MdDashboardCustomize />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="p-2 m-2 w-full private"
                    onClick={handleLogout}
                  >
                    <CiLogout className=" text-xl font-bold" /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <li>
              <Link
                className="px-4 py-3 m-2 rounded-md text-[#1CCC8B] hover:bg-[#1CCC8B] hover:text-white border border-[#1CCC8B]"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="px-4 py-3 m-2 rounded-md text-[#1CCC8B] hover:bg-[#1CCC8B] hover:text-white border border-[#1CCC8B]"
                to="/signup"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-white font-serif font-semibold shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            {endItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <br />
        </Link>
        <Link to="/" className=" flex items-center">
          <div>
            <img className=" w-10 mr-2" src={logo} alt="" />
          </div>
          <div>
            <p className=" font-serif uppercase text-md  text-[#2e9770] tracking-widest font-bold">
              Benchmarks
            </p>
            <p className=" text-[12px] font-lg tracking-widest text-[#399875]">
              Read More.Spend Less
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu-horizontal p-0">{endItems}</ul>
      </div>

      {/* <div className="navbar-end hidden lg:flex">
        <ul className="menu-horizontal p-0">{endItems}</ul>
      </div> */}
    </div>
  );
};

export default Navbar;
