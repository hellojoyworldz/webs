import React from 'react'

const Visual = () => {
  return (
    <section className="visual">
        <div className="in">
        <div className="visual__header">
            <h2 className="visual__tit">NEW<br/>PORTFOLIO</h2>
            <p className="visual__txt">
            너무 무리하지 말아요!<br/>
            이미 당신은 해내고 있고<br/>
            앞으로도 잘 할 수 있을거예요! 
            </p>
            <span className="visual__view"><a href="#!">더 알아보기</a></span>
        </div>
        </div>
        <ul className="visual__slide js-slide">
            <li><img src="https://source.unsplash.com/random/1920x700?sig=001" width="1920" height="700" alt="" /></li>
        </ul>
    </section>
  )
}

export default Visual