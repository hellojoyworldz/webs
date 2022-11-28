import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashRandomImg from "../include/UnsplashRandomImg";
import { useState } from "react";
import { useEffect } from "react";

function Unsplash() {
  const [images, setImages] = useState([]);
  const [randomImgs, setRandomImgs] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=4-0M4l1erSHX0zJZInORLLu5YQEAsEwWgQPwWdOZCPs&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=seoul&client_id=4-0M4l1erSHX0zJZInORLLu5YQEAsEwWgQPwWdOZCPs&per_page=30"
    )
      .then((response) => response.json())
      .then((result) => {
        setImages(result.results);
      })
      // .then((result) => console.log(result));
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.unsplash.com/photos/random?client_id=4-0M4l1erSHX0zJZInORLLu5YQEAsEwWgQPwWdOZCPs&count=10"
    )
      .then((response) => response.json())
      .then((result) => {
        setRandomImgs(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Header />
      <Contents>
        <Title title={["Unsplash", "Api"]} />
        <UnsplashRandomImg randomImgs={randomImgs} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </div>
  );
}

export default Unsplash;
