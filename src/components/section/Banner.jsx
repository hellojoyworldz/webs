import React from "react";

function Banner({ fonts }) {
  return (
    <section id="bannerType" className={`banner__wrap ${fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">WELCOME TO IDAHO</h3>
        <p className="desc">
          You can get more information via following page
          <a href="https://visitidaho.org/">https://visitidaho.org/</a>
        </p>
        <span className="small">view more</span>
      </div>
    </section>
  );
}

export default Banner;
