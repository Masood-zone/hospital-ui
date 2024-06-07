import React from "react";
import { mainLogo } from "../../assets";

function Footer() {
  return (
    <div className="mt-10 ">
      <footer className="footer p-10 bg-[#263238] text-base-300">
        {/* Main Logo */}
        <aside>
          <div className="my-10 max-md:m-0 flex flex-col gap-2">
            <div className="flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <a href="/" className="flex">
                <img
                  src={mainLogo}
                  alt="main-logo"
                  className="w-auto h-auto btn btn-ghost "
                />
              </a>
              <p className="uppercase text-text-200 font-bold text-lg max-sm:text-base">
                THE KIDNEY Specialist Centre
                <p className="text-sm capitalize italic font-light text-text-200 max-sm:text-xs">
                  <span className="text-primary-500 ">Healthy Kidneys</span> Our
                  Priority For Everyone Everywhere.
                </p>
              </p>
            </div>
            <div>
              <p className="text-center max-sm:text-sm max-md:text-left">
                Asokwa, Behind Pentecost Church. <br /> The Kidney Specialist
                Centre. All rights reserved.
              </p>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="uppercase py-2 text-xl text-white font-semibold">
            Company
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
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
      </footer>
    </div>
  );
}

export default Footer;
