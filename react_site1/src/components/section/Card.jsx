import React from "react";

function Card({ attr }) {
  return (
    <section id="cardType" className={`card__wrap ${attr[0]} ${attr[2]}`}>
      <h2>THINGS TO DO</h2>
      <p>
        Family vacation or romantic getaway, thrill-seeker or art buff…
        <br />
        there’s an adventure for you to discover in Auckland.
      </p>
      <div className={`card__inner ${attr[1]}`}>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_01.jpg" alt="" />
          </figure>
          <div className="card__body">
            <h3 className="tit">HOT SPRING</h3>
            <p className="desc">
              you’ll find Auckland’s beloved hot springs waiting to wash away
              your stress. For an alternative soaking experience, visit any of
              the more
            </p>
            <a className="btn" href="/">
              view more
              <span aria-hidden="true">
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_02.jpg" alt="" />
          </figure>
          <div className="card__body">
            <h3 className="tit">STATE PARK</h3>
            <p className="desc">
              From pristine lakes to sky-piercing mountains, Auckland’s state
              parks offer an impressive variety of terrain and beauty. Whether
              you’re hiking
            </p>
            <a className="btn" href="/">
              view more
              <span aria-hidden="true">
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01_03.jpg" alt="" />
          </figure>
          <div className="card__body">
            <h3 className="tit">ROAD TRIP</h3>
            <p className="desc">
              In Auckland, taking the road less traveled is one of the best ways
              to explore the state. And with 31 unique scenic byways, there are
            </p>
            <a className="btn" href="/">
              view more
              <span aria-hidden="true">
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
