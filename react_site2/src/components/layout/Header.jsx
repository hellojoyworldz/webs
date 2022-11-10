import React from 'react'

const Header = (props) => {
  return (
    <header className="header">
        <div className="in">
            <h1 className="header__logo">
                <a className="header__logoLink" href="/react_site2">LOGO</a>
            </h1>

            <nav className="gnb">
                <ul className="gnb__list">
                    <li><a href="#!">HOME</a></li>
                    <li><a href="#!">ABOUT</a></li>
                    <li><a href="#!">CONTECT</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;