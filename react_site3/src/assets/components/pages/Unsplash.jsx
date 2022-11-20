import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import UnsplashCont from "../include/UnsplashCont";

import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

const Unsplash = () => {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["unsplash", "reference api"]} />
        <UnsplashCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
