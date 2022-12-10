import React, { useState, useEffect } from "react";
import { fetchApi } from "../utils/fetchApi";
import { Category, Videos } from ".";

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState("webstoryboy"); //[변수, 함수]
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em>유튜버
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
