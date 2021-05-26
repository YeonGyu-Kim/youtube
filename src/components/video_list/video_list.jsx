import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onClickVideo, display }) => {
  const displayList = display === "list";
  return (
    <ul className={`${styles.videos} ${displayList && styles.videoList}`}>
      {videos.map((video) => (
        <VideoItem
          key={video.etag}
          video={video}
          onClickVideo={onClickVideo}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
