import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import YoutubeCont from "../include/YoutubeCont";

import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

const Youtube = () => {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "reference api"]} />
        <YoutubeCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
