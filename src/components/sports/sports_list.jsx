import { memo } from "react";
import RowList from "../rowList";
import styles from "./sports_list.module.css";

const SportsList = memo(({ sports, onClickVideo, display, describe }) => {
  const displayList = display === "list";
  const describeFalse = describe === "false";

  return (
    <ul
      className={`${styles.videos} ${
        displayList ? styles.videoList : styles.videoGrid
      }`}
    >
      {sports.map((sport) => (
        <RowList
          id={sport.id}
          key={sport.id}
          title={sport.snippet.title}
          video={sport.snippet.thumbnails.medium.url}
          channel={sport.snippet.channelTitle}
          description={describeFalse ? null : sport.snippet.description}
          click={() => onClickVideo(sport)}
          describe={describe}
        />
      ))}
    </ul>
  );
});

export default SportsList;
