import React from "react";
import { VideoCard, Loader } from ".";

const Videos = ({ videos, layout }) => {
  if (!videos?.length) return <Loader />; // ? : 없으면 넘어가라
  return (
    <article className={`videos__inner ${layout}`}>
      {videos.map((item, index) => (
        <VideoCard key={index} video={item} />
      ))}
    </article>
  );
};

export default Videos;
