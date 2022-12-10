import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__inner">
        <div>
          <h3>email</h3>
          <a href="mailto:hellojoyworldz@google.com">
            hellojoyworldz@google.com
          </a>
        </div>
        <div>
          <h3>ID</h3>
          <a href="/">webstoryoby</a>
        </div>
        <div>
          <h3>social</h3>
          <ul>
            <li>
              <a href="https://hellojoyworldz.github.io/myPORTFOLIO/">
                portfolio
              </a>
            </li>

            <li>
              <a href="https://github.com/hellojoyworldz">github</a>
            </li>
            <li>
              <a href="https://hellojoyworldz.tistory.com/">blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
