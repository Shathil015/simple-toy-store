import React from "react";
import { NavLink } from "react-router";
import Logo from "../assets/42187.jpg";
import User from "../assets/user.png";

const Header = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/features">Features</NavLink>
      <NavLink to="/product">Product</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5"
          >
            {links}
          </ul>
        </div>
        <img className="w-30 m" src={Logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex gap-5">
        <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <img src={User} alt="" />
        <a className="btn btn-secondary">Login</a>
      </div>
    </div>
  );
};

export default Header;
