import React from "react";

function Footer() {
  return (
    <footer id="footerType" className="footer__wrap gray section">
      <h2 className="blind">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          <div>
            <h3>Boise</h3>
            <ul>
              <li>
                <a href="/">Boise Train Depot</a>
              </li>
              <li>
                <a href="/">Scavenger Hunt</a>
              </li>
              <li>
                <a href="/">Bogus Basin</a>
              </li>
              <li>
                <a href="/">Botanical Garden</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Idaho falls</h3>
            <ul>
              <li>
                <a href="/">Shoshone Falls</a>
              </li>
              <li>
                <a href="/">Jump Creek</a>
              </li>
              <li>
                <a href="/">Auger Falls</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Nampa</h3>
            <ul>
              <li>
                <a href="/">Winery Tours</a>
              </li>
              <li>
                <a href="/">Wilson Springs Ponds</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Pocatello</h3>
            <ul>
              <li>
                <a href="/">Old Town</a>
              </li>
              <li>
                <a href="/">St.Joseph's Chapel</a>
              </li>
              <li>
                <a href="/">Hot Spring</a>
              </li>
              <li>
                <a href="/">Natural History Museum</a>
              </li>
              <li>
                <a href="/">Swore Frams</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Twin Falls</h3>
            <ul>
              <li>
                <a href="/">Perrine Bridge</a>
              </li>
              <li>
                <a href="/">Snake River</a>
              </li>
              <li>
                <a href="/">Dierkes Lake</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Meridian</h3>
            <ul>
              <li>
                <a href="/">The Village</a>
              </li>
              <li>
                <a href="/">Settlers Park</a>
              </li>
              <li>
                <a href="/">Wahooz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2022 G.SUNAH Portfolio
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
