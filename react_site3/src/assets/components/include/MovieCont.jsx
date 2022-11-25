import React from "react";

const MovieItem = (props) => {
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${props.movie.id}`}
        target="_blank"
        rel="noopener noreferrer">
        <div className="movie__thumb">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="movie__header">
          <strong className="movie__sbj">{props.movie.original_title}</strong>
          <p className="movie__desc">{props.movie.overview}</p>
        </div>
        <div className="movie__footer">
          <span className="movie__date">{props.movie.release_date}</span>
          <div className="movie__grade">
            <div className="rating small star-icon value-3 half color-default">
              {props.movie.vote_average}
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

const Movie = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inner">
          <ul>
            {props.movies.map((movie, index) => (
              <MovieItem key={index} movie={movie} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Movie;
