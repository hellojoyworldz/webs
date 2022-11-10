import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="in">
            <div className="footer__info">
              <h2 className="footer__logo">G.SUNAH SITE</h2>
              <address className="footer__address">
                <span className="item">안녕하세요<br className="br__pc" />방문해주셔서 감사합니다!</span>
                <span className="item">hellojoyworldz@gmail.com</span>
              </address>
              <div className="footer__sns">
                  <span className="item"><a href="#!">FACEBOOK</a></span>
                  <span className="item"><a href="#!">INSTAGRAM</a></span>
                  <span className="item"><a href="#!">YOUTUBE</a></span>
                  <span className="item"><a href="#!">GITHUB</a></span>
                  <span className="item"><a href="#!">DISCODE</a></span>
              </div>
            </div>

            <div className="footer__sitemap">
                <ul>
                    <li>
                        <a href="#!">사이트</a>
                        <ul>
                            <li><a href="#!">웹표준 사이트</a></li>
                            <li><a href="#!">반응형 사이트</a></li>
                            <li><a href="#!">패럴랙스 사이트</a></li>
                            <li><a href="#!">포트폴리오 사이트</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!">사이트</a>
                        <ul>
                            <li><a href="#!">웹표준 사이트</a></li>
                            <li><a href="#!">반응형 사이트</a></li>
                            <li><a href="#!">패럴랙스 사이트</a></li>
                            <li><a href="#!">포트폴리오 사이트</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!">사이트</a>
                        <ul>
                            <li><a href="#!">웹표준 사이트</a></li>
                            <li><a href="#!">반응형 사이트</a></li>
                            <li><a href="#!">패럴랙스 사이트</a></li>
                            <li><a href="#!">포트폴리오 사이트</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!">사이트</a>
                        <ul>
                            <li><a href="#!">웹표준 사이트</a></li>
                            <li><a href="#!">반응형 사이트</a></li>
                            <li><a href="#!">패럴랙스 사이트</a></li>
                            <li><a href="#!">포트폴리오 사이트</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <span className="footer__copy">Copyright 2022. All Rights Reserved. - Designed by Webstoryboy</span>
    </footer>
  )
}

export default Footer;