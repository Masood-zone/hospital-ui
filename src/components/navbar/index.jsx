import React from "react";
import { mainLogo } from "../../assets";
import { NAV_LINKS } from "./data";
import MobileNavbar from "./mobile";

function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      {/* Logo and mobile menu */}
      <div className="navbar-start">
        <MobileNavbar />
        <img
          src={mainLogo}
          alt="main-logo"
          className="w-52 h-auto btn btn-ghost hidden sm:block"
        />
      </div>
      {/* Main Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Buttons */}
      <div className="navbar-end">
        <a className="btn btn-ghost text-primary-600">Log in</a>
        <a className="btn bg-primary-600 text-white">Sign up</a>
      </div>
    </nav>
  );
}

export default Navbar;
