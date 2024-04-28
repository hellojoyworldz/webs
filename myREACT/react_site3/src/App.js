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
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/reference" element={<Reference />}></Route>
      <Route path="/youtube" element={<Youtube />}></Route>
      <Route path="/movie" element={<Movie />}></Route>
      <Route path="/unsplash" element={<Unsplash />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
