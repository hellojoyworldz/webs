import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import { fetchApi } from "../utils/fetchApi";
import { Videos, Loader } from "./";

const VideoConts = () => {
  const [videosDetails, setVideosDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideosDetail(data.items[0])
    );
    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videosDetails?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videosDetails;

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__inner">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            <div className="desc">
              <span className="title">{title}</span>
              <div className="channel">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
              </div>
              <div className="count">
                <span className="view">조회수 {viewCount}회</span>
                <span className="like">{likeCount}</span>
              </div>
            </div>
          </div>
          <div className="right">
            <Videos videos={videos} layout="column" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoConts;
