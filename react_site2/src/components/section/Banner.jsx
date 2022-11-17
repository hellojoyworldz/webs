import React from "react";

const Banner = () => {
  return (
    <section className="mainBanner">
      <div className="in">
        <h2 className="tit">항공권 모아보면 보인다!</h2>
        <p className="txt">
          가격 비교부터 일정 관리까지 한 번에
          <br />
          항공권 검색, 한번에 비교하여 최고의 예약을!
        </p>
        <a className="view" href="#!">
          바로가기
        </a>
      </div>
    </section>
  );
};

export default Banner;
