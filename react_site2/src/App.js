import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import SwiperSlide from "./components/section/SwiperSlide";
import Visual from "./components/section/Visual";
import Step from "./components/section/Step";
import Gallery from "./components/section/Gallery";
import Blog from "./components/section/Blog";
import Banner from "./components/section/Banner";
import Review from "./components/section/Review";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Visual />

        <Step />
        <Gallery />
        <Blog />
        <Banner />
        <Review />
      </Main>
      <Footer />
    </>
  );
};

export default App;
