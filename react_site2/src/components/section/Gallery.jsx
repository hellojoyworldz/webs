import React from 'react'

const Gallery = () => {
  return (
<section className="mainGallery">
    <div className="in">
        <div className="cm-main__header">
            <h2 className="tit">웹쓰 스터디 맴버</h2>
            <p className="txt">웹 디자이너, 웹 퍼블리셔, 프론트앤드 개발자 맴버를 소개합니다.</p>
        </div>
        <ul className="mainGallery__list">
            <li className="item">
                <a href="#!">
                    <span className="thumb"><img src="https://source.unsplash.com/random/373x524?sig=100" width="373" height="524" alt="" /></span>
                    <div className="desc">
                        <strong className="tit">웹쓰 24기 전현정</strong>
                        <span className="view">자세히 보기</span>
                    </div>
                </a>
            </li>
            <li className="item">
                <a href="#!">
                    <span className="thumb"><img src="https://source.unsplash.com/random/373x524?sig=101" width="373" height="524" alt="" /></span>
                    <div className="desc">
                        <strong className="tit">웹쓰 25기 전현정</strong>
                        <span className="view">자세히 보기</span>
                    </div>
                </a> 
            </li>
            <li className="item">
            <a href="#!">
                <span className="thumb"><img src="https://source.unsplash.com/random/373x524?sig=102" width="373" height="524" alt="" /></span>
                <div className="desc">
                    <strong className="tit">웹쓰 26기 전현정</strong>
                    <span className="view">자세히 보기</span>
                </div>
            </a>
        </li>
        </ul>
    </div>
</section>
  )
}

export default Gallery