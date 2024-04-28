import React from "react";

const Gallery = () => {
  return (
    <section id="car" className="mainGallery">
      <div className="in">
        <div className="cm-main__header">
          <h2 className="tit">Top rental car in 서울</h2>
          <p className="txt">
            서울, 대한민국의 평균 소형 렌터카 요금은 81,598원입니다. <br />
            가격은 1일 기준 61,001원으로, 다른 달보다 약 26% 저렴합니다.
          </p>
        </div>
        <ul className="mainGallery__list">
          <li className="item">
            <a href="#!">
              <span className="thumb">
                <img
                  src="assets/img/mainGallery__img01.png"
                  width="580"
                  height="272"
                  alt=""
                />
              </span>
              <div className="desc">
                <strong className="tit">Hyundai Sonata</strong>
                <span className="view">34원/day</span>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="#!">
              <span className="thumb">
                <img
                  src="assets/img/mainGallery__img02.png"
                  width="580"
                  height="272"
                  alt=""
                />
              </span>
              <div className="desc">
                <strong className="tit">Hyundai Santa Fe</strong>
                <span className="view">40원/day</span>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="#!">
              <span className="thumb">
                <img
                  src="assets/img/mainGallery__img03.png"
                  width="580"
                  height="272"
                  alt=""
                />
              </span>
              <div className="desc">
                <strong className="tit">BMW 5 Series</strong>
                <span className="view">71원/day</span>
              </div>
            </a>
          </li>
          <li className="item">
            <a href="#!">
              <span className="thumb">
                <img
                  src="assets/img/mainGallery__img04.png"
                  width="580"
                  height="272"
                  alt=""
                />
              </span>
              <div className="desc">
                <strong className="tit">BMW 5 Series</strong>
                <span className="view">71원/day</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
