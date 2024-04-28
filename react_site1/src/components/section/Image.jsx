import React from "react";

function Image(props) {
  return (
    <section id="imageType" className={`image__wrap ${props.attr}`}>
      <h2>2022 Upcoming Events in Auckland</h2>
      <p>
        Looking for things to do in Auckland?
        <br />
        Whether you're a local, new in town or just cruising through we've got
        loads of great tips and events.
      </p>
      <div className="image__inner">
        <article className="image img1">
          <h3 className="image__title">Spirit of Boise Balloon</h3>
          <p className="image__desc">
            This annual event can be recognized as one of Boise’s final summer
            events. It will held this year
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            view more
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">Western Auckland Fair</h3>
          <p className="image__desc">
            This event is a celebration of agriculture, ranching, and life in
            the state of Auckland. Tickets are available
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            view more
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
