import React from "react";
import { tesla } from "../../assets";

function Product() {
  return (
    <section className="flex-none flex items-center justify-center w-full h-full min-w-0 max-md:h-full gap-5 mt-10 bg-[#F5F7FA]">
      <div className="w-[530px] h-full ">
        <img src={tesla} alt="tesla" className="w-full h-full" />
      </div>
      <div className="w-full h-full">
        <div className="flex flex-col justify-start items-start">
          <p className="text-base font-medium text-text-800">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="mt-5">
            <p className="text-xl font-semibold text-primary-500">Tim Smith</p>
            <p className="text-base font-medium text-text-400">
              British Dragon Boat Racing Association
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
