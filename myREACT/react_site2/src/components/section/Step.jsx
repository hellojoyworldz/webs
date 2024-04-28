import React from "react";

const Step = () => {
  return (
    <section className="mainStep">
      <div className="in">
        <div className="mainStep__header">
          <h2 className="tit">
            <span className="titBullet">HOTEL</span>
            호텔스컴바인
          </h2>
          <p className="txt">
            호텔, 항공권, 렌트카 까지 한 눈에 비교하세요
            <br className="br__pc" />전 세계의 가장 좋은 상품을 만날 수
            있습니다.
          </p>
        </div>
        <ul className="mainStep__list">
          <li className="item">
            <strong className="tit">HOTEL</strong>
            <p className="txt">
              500만개 호텔 한번에 비교 예약, 최저가 보장! 호텔스컴바인에서 모든
              호텔과 숙소를 한 눈에 비교하세요 전 세계의 가장 좋은 상품을 만날
              수 있습니다.
            </p>
          </li>
          <li className="item">
            <strong className="tit">FLIGHTS</strong>
            <p className="txt">
              전세계 항공사와 주요 여행사의 가격을 모두 모아 항공권 예약을 쉽고
              빠르게 비교해 드립니다. 저렴한 항공권 및 특가 항공권을 가격비교로
              확인하세요. 나에게 맞는 항공권을 다양한 검색으로 한번에 확인하고
              최적의 스케쥴과 최저가 항공권, 변경 수수료가 없는 항공권 예약도
              검색할 수 있어 편리합니다. 항공권, 호텔, 렌터카 가격비교를 한번에
              더 쉽고 빠르게 찾아 보세요!
            </p>
          </li>
          <li className="item">
            <strong className="tit">CARS</strong>
            <p className="txt">
              국내외 주요 예약 사이트를 한 곳에 모아 렌터카 가격을 비교해
              드립니다. 원하는 렌터카를 다양한 옵션으로 필터링하여 한 번에
              검색하고 예약하세요! 편도 여행, 특정 업체의 포인트 적립, 다양한
              규모의 차량 등 원하는 옵션을 클릭한 번으로 확인할 수 있습니다.
              또한, 차량 소독 강화, 주행거리 무제한 등의 조건도 추가할 수 있어
              더욱 만족스러운 여행을 만들 수 있습니다.
            </p>
          </li>
          <li className="item">
            <strong className="tit">TRIPS</strong>
            <p className="txt">
              트립에서 설레이는 여행의 다양한 일정을 계획하고 변경하고
              관리해보세요. 트립은 실시간으로 취소, 지연, 탑승구 변동 정보를
              업데이트하여 한 곳에서 보여드립니다. 함께 여행하는 사람들과 일정을
              공유하고 편집 권한을 정하여 정보를 업데이트해보세요.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Step;
