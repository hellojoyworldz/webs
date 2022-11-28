import React from "react";
import { Link } from "react-router-dom";

import { SearchBar } from "./";
import { SiYoutubegaming } from "react-icons/si";

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <SiYoutubegaming className="icon" /> 개발자 유튜브
        </Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderCont;
