import React from "react";

const Review = () => {
  return (
    <section className="mainReview">
      <div className="in">
        <div className="cm-main__header">
          <h2 className="tit">Review in 서울</h2>
          <p className="txt">
            2022년 5월 새롭게 오픈한 롯데 호텔 월드는 <br />
            세계 최대 규모의 실내 놀이공원인 롯데월드 어드벤쳐와 롯데월드몰과
            바로 연결되어 있습니다.
          </p>
        </div>
        <ul className="mainReview__list">
          <li className="item">
            <a href="#!">
              <div className="txt">
                분명 지하 차장에서 발렛주차했는데 지하에 주차안하고 밖에
                노출시켜 온갖 낙엽과 먼지들이 쌓여서 차를 갖다주시고 어디다
                두셨는지 체크 아웃하고 차 가져오시는 데 한참이나
                기다려야했습니다. 밤에 더운데 중앙난방이라 난방만 나온다고 해서
                창문열어놓고 선풍기 대여해서 너무 불편했고 모기에서 한창
                뜯겼습니다. 밖에 시위를 하는지 너무 시끄러웠습니다.
              </div>
              <div className="desc">
                <strong className="tit">
                  Olivia
                  <span className="th">2022년 11월</span>
                </strong>
                <span className="grade">
                  <span className="gradeStar star4"></span>
                </span>
              </div>
              <span className="view">자세히 보기</span>
            </a>
          </li>
          <li className="item">
            <a href="#!">
              <div className="txt">
                체크인전에 이메일로 높은층을 요청하는 이메일을 보냈습니다.
                그리고 체크인시에도 요청하였으나, 제일 낮은층을
                배정해주셨습니다!! 숙소는 깨끗하고 좋았으며, 다른 직원분들의
                응대도 좋았습니다. 주변 전망대 및 놀이공원 호수가 있어 참
                좋았습니다. 호텔과 연계한 전망대 할인권 및 놀이공원 할인권이
                있었으면 좋겠습니다. 시설이 매우 낡았으며, 너무 오래된
                호텔입니다. 개인적으로는 다시는 투숙하고 싶지 않습니다
              </div>
              <div className="desc">
                <strong className="tit">
                  Jessica
                  <span className="th">2022년 11월</span>
                </strong>
                <span className="grade">
                  <span className="gradeStar star3"></span>
                </span>
              </div>
              <span className="view">자세히 보기</span>
            </a>
          </li>
          <li className="item">
            <a href="#!">
              <div className="txt">
                장점:발렛이용 안했는데 나중에 주차장까지 친절하게 태워다주셔서
                감사했어요~ 단점:셔틀버스 개선? 차를 바꾸지 않더라도 ~ 내부나
                외관 디자인 좀 신경썼음좋겟어요. (발렛안하면 소외되는
                느낌받걸랑요…)호텔 시설 구조때문에 프런트객실 멀리있는건데
                편의성은 큰 불만없지만 이용자가 소외감을 느낌 안될거 같아요.
                다른호텔들은 셔틀버스 벤츠 승합차나 호텔로고 고급스럽게
                들어갔는데… 약간 호텔 직원출퇴근 버스 타는 느낌이었어요 ㅠ
                다른건 다 좋았어요~
              </div>
              <div className="desc">
                <strong className="tit">
                  Taehyun
                  <span className="th">2022년 11월</span>
                </strong>
                <span className="grade">
                  <span className="gradeStar star5">5점</span>
                </span>
              </div>
              <span className="view">자세히 보기</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Review;
