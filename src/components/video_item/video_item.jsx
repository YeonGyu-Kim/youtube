import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onClickVideo, display }) => {
    const displayList = display === "list";
    return (
      <li
        className={`${styles.container} ${
          displayList ? styles.list : styles.grid
        }`}
        onClick={() => onClickVideo(video)}
      >
        <div
          className={`${styles.video} ${
            displayList ? styles.videoList : styles.videoGrid
          }`}
        >
          <img
            className={
              display === "list" ? styles.thumbnailList : styles.thumbnailGrid
            }
            src={snippet.thumbnails.medium.url}
            alt='video thumbnail'
          />
          <div
            className={`${styles.text} ${
              displayList ? styles.textList : styles.textGrid
            }`}
          >
            <span className={styles.title}>
              {snippet.title.length > 25
                ? `${snippet.title.substring(0, 25)}...`
                : snippet.title}
            </span>
            <span className={styles.channelTitle}>{snippet.channelTitle}</span>
          </div>
        </div>
      </li>
    );
  }
);
export default VideoItem;
