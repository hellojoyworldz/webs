import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={props.fonts}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            Auckland <em>site</em>
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            <li>
              <a href="#imageType">About</a>
            </li>
            <li>
              <a href="#imgTextType">Food/Drink</a>
            </li>
            <li>
              <a href="#cardType">Things to do</a>
            </li>
            <li>
              <a href="#textType">Travel tips</a>
            </li>
            <li>
              <a href="#footerType">Footer</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="https://github.com/hellojoyworldz/react_site1">Github</a>
        </div>
        {/*
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
        */}
      </div>
    </header>
  );
}

export default Header;
