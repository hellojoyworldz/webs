import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchApi } from "../utils/fetchApi";
import { Videos } from ".";

const SearchConts = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}&type=video`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <main id="main">
      <section id="search">
        <h2 className="result">
          <em>{searchTerm}</em> 검색 결과입니다.
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default SearchConts;
