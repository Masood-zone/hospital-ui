import React from "react";
import Banner from "../../components/banner";
import Faq from "../sections/faq";
import Services from "../sections/services";

function Home() {
  return (
    <section className="w-screen h-auto overflow-hidden">
      <Banner />
      <section className="max-w-7xl mx-auto ">
        <Services />
        <Faq />
      </section>
    </section>
  );
}

export default Home;
