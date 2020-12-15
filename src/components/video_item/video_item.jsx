import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onClickVideo, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onClickVideo(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt='video thumbnail'
          />
          <div className={styles.text}>
            <span className={styles.title}>{snippet.title}</span>
            <span className={styles.channelTitle}>{snippet.channelTitle}</span>
          </div>
        </div>
      </li>
    );
  }
);
export default VideoItem;
