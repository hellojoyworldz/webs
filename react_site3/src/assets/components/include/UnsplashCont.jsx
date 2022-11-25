import React from "react";

const Unsplash = (props) => {
  return (
    <li>
      <a href="" target="_blank" rel="noopener noreferrer">
        <div className="movie__thumb">
          <img src="" alt="" />
        </div>
        <div className="movie__header">
          <strong className="movie__sbj">1</strong>
          <p className="movie__desc">2</p>
        </div>
        <div className="movie__footer">
          <span className="movie__date">3</span>
          <div className="movie__grade">
            <div className="rating small star-icon value-3 half color-default">
              4
              <div className="star-container">
                <div className="star">
                  <i className="star-empty"></i>
                  <i className="star-half"></i>
                  <i className="star-filled"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default Unsplash;
