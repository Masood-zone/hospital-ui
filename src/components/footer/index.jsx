import React from "react";
import { mainLogo } from "../../assets";

function Footer() {
  return (
    <div className="mt-10 ">
      <footer className="footer p-10 bg-[#263238] text-base-300">
        {/* Main Logo */}
        <aside>
          <div className="flex items-center">
            <a href="/" className="flex">
              <img
                src={mainLogo}
                alt="main-logo"
                className="w-auto h-auto btn btn-ghost "
              />
            </a>
            <p className="uppercase text-text-200 font-bold text-lg">
              THE KIDNEY Specialist Centre
              <p className="text-sm capitalize italic font-light text-text-200">
                <span className="text-primary-500 ">Healthy Kidneys</span> Our
                Priority For Everyone Everywhere.
              </p>
            </p>
          </div>
        </aside>
        <nav>
          <h6 className="uppercase py-2 text-xl text-white font-semibold">
            Services
          </h6>
          <a className="link link-hover">Kidney Diseases Prevention Clinic</a>
          <a className="link link-hover">Dialysis services</a>
          <a className="link link-hover">Healthy dietary consult</a>
          <a className="link link-hover">Rehabilitation medicine services</a>
          <a className="link link-hover">General medical consultation</a>
          <a className="link link-hover">
            School and work based rehabilitation
          </a>
        </nav>
        <nav>
          <h6 className="uppercase py-2 text-xl text-white font-semibold">
            Company
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
