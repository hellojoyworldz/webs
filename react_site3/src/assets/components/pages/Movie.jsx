import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MovieCont from "../include/MovieCont";
import MovieSearch from "../include/MovieSearch";
import MovieSlider from "../include/MovieSlider";

import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

const Movie = () => {
  //데이터 가져와서 MovieCont에 주기
  const [movies, setMovies] = useState([]); // 배열구조분해할당. 움지이는 데이터는 이렇게 저장하는구나! 라고 생각하기.

  const search = async (query) => {
    await fetch(
      //비동기방식으로 해주기 위해 async,  await 넣어준다.
      `https://api.themoviedb.org/3/search/movie?api_key=229aa6d4eeca4ffac7974c6a4310529d&page=1&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results)) //배열 안에 객체 가져오기
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    //데이터가 바뀌면 자동으로 바뀌어 주기 위해서. 필요한 부분이 바뀐것을 인식하기 위해서.
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=229aa6d4eeca4ffac7974c6a4310529d&&page=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results)) //배열 안에 객체 가져오기
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />

        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;
