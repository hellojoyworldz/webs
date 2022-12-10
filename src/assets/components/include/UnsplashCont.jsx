import React from "react";

const UnsplashItem = (props) => (
  <li>
    <a href="/">
      <img src={props.picture.snippet.thumbnails.high.url} alt="" />
    </a>
  </li>
);

const UnsplashCont = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <ul>
            {props.picture.map((picture) => (
              <UnsplashItem key={picture.id} picture={picture} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default UnsplashCont;
