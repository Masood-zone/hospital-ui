import React from "react";
import Banner from "../../components/banner";
import Features from "../sections/features";
import Testimonials from "../sections/testimonials";
import Product from "../sections/product";
import Faq from "../sections/faq";
import Services from "../sections/services";

function Home() {
  return (
    <section className="w-screen h-auto overflow-hidden">
      <Banner />
      <section className="max-w-7xl mx-auto ">
        <Services />
        <Features />
        <Product />
        <Testimonials />
        <Faq />
      </section>
    </section>
  );
}

export default Home;
