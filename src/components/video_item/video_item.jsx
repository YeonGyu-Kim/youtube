import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.container}>
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

export default VideoItem;
