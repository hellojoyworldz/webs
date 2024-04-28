import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashCont from "../include/UnsplashCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [pictures, setPicture] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?&query={query}&client_id=4-0M4l1erSHX0zJZInORLLu5YQEAsEwWgQPwWdOZCPs&height=300`
    )
      .then((response) => response.json())
      .then((result) => setPicture(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.unsplash.com/photos?client_id=4-0M4l1erSHX0zJZInORLLu5YQEAsEwWgQPwWdOZCPs&order_by=popular&per_page=24&`,
      requestOptions
    )
      .then((response) => response.json())

      .then((result) => setPicture(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "reference api"]} />
        <UnsplashSlider pictures={pictures} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont pictures={pictures} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
