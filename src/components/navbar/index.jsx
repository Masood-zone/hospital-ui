import React from "react";
import { mainLogo } from "../../assets";
import { NAV_LINKS } from "./data";
import MobileNavbar from "./mobile";
import { Link } from "react-router-dom";

function Navbar() {
  const scrollToSection = (e, path) => {
    e.preventDefault();
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "*";
    }
  };
  return (
    <nav className="navbar bg-base-100 z-10 fixed w-full top-0 left-0">
      {/* Logo and mobile menu */}
      <div className="navbar-start max-md:w-full">
        <MobileNavbar />
        <img
          src={mainLogo}
          alt="main-logo"
          className="w-auto h-auto btn btn-ghost hidden sm:block"
        />
        <a href="/" className="flex">
          <img
            src={mainLogo}
            alt="main-logo"
            className="w-auto h-auto btn btn-ghost sm:hidden"
          />
        </a>
        <p className="cursor-pointer uppercase text-lg max-md:text-sm font-bold max-sm:text-sm max-[399px]:text-xs">
          THE KIDNEY Specialist Centre
        </p>
      </div>
      {/* Main Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                onClick={(e) => scrollToSection(e, link.path)}
                to={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Buttons */}
      <div className="navbar-end max-sm:hidden">
        <a className="btn bg-primary-600 text-white">Contact Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
