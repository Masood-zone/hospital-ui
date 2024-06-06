import React from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "./data";
import { mainLogo } from "../../assets";

function MobileNavbar() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <Menu />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <a href="/" className="flex">
          <img
            src={mainLogo}
            alt="main-logo"
            className="w-auto h-auto btn btn-ghost sm:hidden"
          />
          <p className="cursor-pointer capitalize text-sm font-medium md:hidden">
            THE KIDNEY Specialist Centre
          </p>
        </a>
        {NAV_LINKS.map((link) => (
          <li key={link.id} className="my-1">
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNavbar;
