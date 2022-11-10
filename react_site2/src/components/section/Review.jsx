import React from 'react'

const Review = () => {
  return (
    <section className="mainReview">
        <div className="in">
            <div className="cm-main__header">
                <h2 className="tit">스터디 후기</h2>
                <p className="txt">웹 디자이너, 웹 퍼블리셔, 프론트앤드 개발자 맴버를 소개합니다.</p>
            </div>
            <ul className="mainReview__list">
                <li className="item">
                    <a href="#!">
                        <div className="txt">
                            불과 3달전만해도 여러 원인들로 인해 자존감이 밑바닥이였던 
                            저에게 이 스터디는 너무 소중한 시간이었어요. 매일 마음속으로 
                            울고싶다를 외쳤던 저였는데 이제는 조금이나마 이겨 낼 수 있을 것 
                            같네요. 다음에 선생님 만났을 때는 많이 발전해있는 제가 
                            되었으면 좋겠네요
                        </div>
                        <div className="desc">
                            <strong className="tit">이태용</strong>
                            <span className="grade">
                                <span className="gradeStar start5"></span>
                            </span>
                        </div>
                        <span className="view">자세히 보기</span>
                    </a>
                </li>
                <li className="item">
                    <a href="#!">
                        <div className="txt">
                            불과 3달전만해도 여러 원인들로 인해 자존감이 밑바닥이였던 
                            저에게 이 스터디는 너무 소중한 시간이었어요. 매일 마음속으로 
                            울고싶다를 외쳤던 저였는데 이제는 조금이나마 이겨 낼 수 있을 것 
                            같네요. 다음에 선생님 만났을 때는 많이 발전해있는 제가 
                            되었으면 좋겠네요
                        </div>
                        <div className="desc">
                            <strong className="tit">이태용</strong>
                            <span className="grade">
                                <span className="gradeStar start5"></span>
                            </span>
                        </div>
                        <span className="view">자세히 보기</span>
                    </a>
                </li>
                <li className="item">
                <a href="#!">
                    <div className="txt">
                        불과 3달전만해도 여러 원인들로 인해 자존감이 밑바닥이였던 
                        저에게 이 스터디는 너무 소중한 시간이었어요. 매일 마음속으로 
                        울고싶다를 외쳤던 저였는데 이제는 조금이나마 이겨 낼 수 있을 것 
                        같네요. 다음에 선생님 만났을 때는 많이 발전해있는 제가 
                        되었으면 좋겠네요
                    </div>
                    <div className="desc">
                        <strong className="tit">이태용<span className="th">웹스 24기</span></strong>
                        <span className="grade"><span className="gradeStar start5">5점</span></span>
                    </div>
                    <span className="view">자세히 보기</span>
                </a>
            </li>
            </ul>
        </div>
    </section>
  )
}

export default Review