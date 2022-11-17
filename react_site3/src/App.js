import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./assets/components/pages/Main";
import About from "./assets/components/pages/About";
import Reference from "./assets/components/pages/Reference";
import Youtube from "./assets/components/pages/Youtube";
import Movie from "./assets/components/pages/Movie";
import Unsplash from "./assets/components/pages/Unsplash";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" elements={<Main />} />
      <Route path="/about" elements={<About />} />
      <Route path="/reference" elements={<Reference />}></Route>
      <Route path="/youtube" elements={<Youtube />}></Route>
      <Route path="/movie" elements={<Movie />}></Route>
      <Route path="/unsplash" elements={<Unsplash />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
