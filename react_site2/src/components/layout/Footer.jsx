import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="in">
        <div className="footer__info">
          <h2 className="footer__logo">Hotels Combined</h2>
          <address className="footer__address">
            <span className="item">
              안녕하세요
              <br className="br__pc" />
              방문해주셔서 감사합니다!
            </span>
            <span className="item">
              호텔스컴바인에서는 전 세계 여행 사이트를 한 번에 검색하고 <br />
              최고의 항공권, 호텔, 에어텔, 렌트카 상품을 찾아드립니다.
            </span>
          </address>
          <div className="footer__sns">
            <span className="item">
              <a href="#!">블로기</a>
            </span>
            <span className="item">
              <a href="#!">브런치</a>
            </span>
            <span className="item">
              <a href="#!">페이스북</a>
            </span>
            <span className="item">
              <a href="#!">유튜브</a>
            </span>
            <span className="item">
              <a href="#!">인스타그램</a>
            </span>
          </div>
        </div>

        <div className="footer__sitemap">
          <ul>
            <li>
              <a href="#!">한국</a>
              <ul>
                <li>
                  <a href="#!">서울 호텔</a>
                </li>
                <li>
                  <a href="#!">부산 호텔</a>
                </li>
                <li>
                  <a href="#!">제주시 호텔</a>
                </li>
                <li>
                  <a href="#!">서귀포시 호텔</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">일본</a>
              <ul>
                <li>
                  <a href="#!">후쿠오카 호텔</a>
                </li>
                <li>
                  <a href="#!">오사카 호텔</a>
                </li>
                <li>
                  <a href="#!">도쿄 호텔</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">미국</a>
              <ul>
                <li>
                  <a href="#!">라스베이거스 호텔</a>
                </li>
                <li>
                  <a href="#!">엘에이 호텔</a>
                </li>
                <li>
                  <a href="#!">뉴욕 호텔</a>
                </li>
                <li>
                  <a href="#!">시애틀 호텔</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!">기타</a>
              <ul>
                <li>
                  <a href="#!">다낭 호텔</a>
                </li>
                <li>
                  <a href="#!">마카오 호텔</a>
                </li>
                <li>
                  <a href="#!">홍콩 호텔</a>
                </li>
                <li>
                  <a href="#!">방콕 호텔</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer__copy">
        Copyright 2022. All Rights Reserved. - Designed by Webstoryboy
      </span>
    </footer>
  );
};

export default Footer;
