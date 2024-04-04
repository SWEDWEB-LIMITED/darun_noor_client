import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/LogoTransparent.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openActivityDropdown, setOpenActivityDropdown] =
    useState<boolean>(false);

  // Toggle navigation menu
  const toggleNav = () => {
    setOpenNav(!openNav);
    setOpenActivityDropdown(false);
  };

  // Toggle activity dropdown
  const toggleActivityDropdown = () => {
    setOpenActivityDropdown(!openActivityDropdown);
  };

  // Close activity dropdown when an item is clicked
  const closeActivityDropdown = () => {
    setOpenActivityDropdown(false);
  };

  // Render navigation list
  const navList = () => {
    return (
      <>
        <NavLink
          to="/"
          className="block navActive   transition duration-300 ease-in-out"
        >
          Home
        </NavLink>
        <div className="relative">
          <span
            onClick={toggleActivityDropdown}
            className="cursor-pointer navActive  flex items-center  transition duration-300 ease-in-out"
          >
            Activity
            <svg
              className="w-4 h-4 ml-1 transition-transform transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: openActivityDropdown
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <div
            className={`${
              openActivityDropdown ? "block" : "hidden"
            } absolute top-full left-0 z-50 bg-white shadow-md py-2 mt-1 w-full lg:w-[150px]`}
          >
            <NavLink
              to="activity/kids"
              className="block px-4 py-2  navActive hover:text-orange-400 transition duration-300 ease-in-out"
              onClick={closeActivityDropdown}
            >
              Kids 5-13 years
            </NavLink>
            <NavLink
              to="activity/girls"
              className="block px-4 py-2 navActive   transition duration-300 ease-in-out"
              onClick={closeActivityDropdown}
            >
              Muslim Girls 13+ years
            </NavLink>
            <NavLink
              to="activity/youth"
              className="block px-4 py-2 navActive   transition duration-300 ease-in-out"
              onClick={closeActivityDropdown}
            >
              Youth 13+ years
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/learning-center"
          className="block  navActive  transition duration-300 ease-in-out"
        >
          Learning Center
        </NavLink>
        <NavLink
          to="/about-us"
          className="block navActive    transition duration-300 ease-in-out"
        >
          About Us
        </NavLink>
      </>
    );
  };

  return (
    <header className="font-bold mb-10 shadow-md ">
      <div className="container mx-auto py-4 px-4 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center hover:text-orange-400 flex-shrink-0"
          >
            <img
              className="w-[80px] md:w-[100px] flex-shrink-0 object-cover rounded-full"
              src={logo}
              alt="Daar-Un-Noor"
            />
            <div className="md:ml-2 mr-1">
              <h3 className="font-extrabold md:text-2xl">
                Daar-Un-Noor Sverige
              </h3>
              <p className="text-[9px] md:text-lg ">
                Striving for social and spiritual renewal
              </p>
            </div>
          </Link>
          <button
            onClick={toggleNav}
            className="block lg:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
          >
            <svg
              className={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className={`lg:flex lg:space-x-4 ${openNav ? "block" : "hidden"}`}>
          {navList()}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
