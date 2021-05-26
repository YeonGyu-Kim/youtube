import { memo } from "react";
import RowList from "../rowList";
import styles from "./music_list.module.css";

const MusicList = memo(({ music, onClickVideo, display, describe }) => {
  const displayList = display === "list";
  const describeFalse = describe === "false";
  return (
    <ul
      className={`${styles.videos} ${
        displayList ? styles.videoList : styles.videoGrid
      }`}
    >
      {music.map((music) => (
        <RowList
          id={music.id}
          key={music.id}
          title={music.snippet.title}
          video={music.snippet.thumbnails.medium.url}
          channel={music.snippet.channelTitle}
          description={describeFalse ? null : music.snippet.description}
          click={() => onClickVideo(music)}
          describe={describe}
        />
      ))}
    </ul>
  );
});

export default MusicList;
