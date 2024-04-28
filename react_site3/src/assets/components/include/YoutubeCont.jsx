import React from "react";

const YoutubeItem = (props) => {
  return (
    <li>
      <a
        href={`https://youtube.com/watch?v=${props.youtube.id}`}
        target="_blank"
        rel="noopener noreferrer">
        <div className="movie__thumb">
          <img src={props.youtube.snippet.thumbnails.high.url} alt="" />
        </div>
        <div className="movie__header">
          <strong className="movie__sbj">{props.youtube.snippet.title}</strong>
        </div>
        <div className="movie__footer">
          <span className="movie__date">
            {props.youtube.snippet.channelTitle}
          </span>
        </div>
      </a>
    </li>
  );
};

const Youtube = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <ul>
            {props.youtube.map((youtubes, index) => (
              <YoutubeItem key={index} youtube={youtubes} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
