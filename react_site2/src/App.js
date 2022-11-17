import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
//import Visual from "./components/section/Visual";
import Slide from "./components/section/SwiperSlide";
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
        <Slide />
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
