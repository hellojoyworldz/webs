import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImgText from "./components/section/ImgText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider />
        <Image attr="section container nexon" />
        <ImgText attr={["section", "container", "nexon", "gray"]} />
        <Card attr={["section", "container", "nexon"]} />
        <Banner fonts="gmarket" />
        <Text attr={["section", "container", "nexon"]} />
      </Main>

      <Footer attr={["section", "container", "nexon", "gray"]} />
    </>
  );
}

export default App;

//
