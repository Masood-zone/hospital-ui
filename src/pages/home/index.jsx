import React from "react";
import Banner from "../../components/banner";
import Testimonials from "../sections/testimonials";
import Faq from "../sections/faq";
import Services from "../sections/services";

function Home() {
  return (
    <section className="w-screen h-auto overflow-hidden">
      <Banner />
      <section className="max-w-7xl mx-auto ">
        <Services />
        <Testimonials />
        <Faq />
      </section>
    </section>
  );
}

export default Home;
