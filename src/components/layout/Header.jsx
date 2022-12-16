import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <div className="in">
        <h1 className="header__logo">
          <a className="header__logoLink" href="/react_site2">
            Hotels Combined
          </a>
        </h1>

        <nav className="gnb">
          <ul className="gnb__list">
            <li>
              <a href="#hotel">호텔</a>
            </li>
            <li>
              <a href="#car">렌트카</a>
            </li>
            <li>
              <a href="#ticket">항공권</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
