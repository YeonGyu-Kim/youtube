import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        src={`https://www.youtube.com/embed/${video.id}`}
        width='100%'
        height='500'
        frameBorder='0'
        title='video'
        allowFullScreen
      ></iframe>
      <div className={styles.contents}>
        <h1 className={styles.content}>{video.snippet.title}</h1>
        <h2 className={styles.content}> {video.snippet.channelTitle}</h2>
        <pre className={`${styles.content} ${styles.description}`}>
          {video.snippet.description}
        </pre>
      </div>
    </section>
  );
};

export default VideoDetail;
