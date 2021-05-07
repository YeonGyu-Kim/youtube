import { memo } from "react";
import RowList from "../rowList";
import styles from "./sports_list.module.css";

const SportsList = memo(({ sports, onClickVideo }) => {
  return (
    <ul className={styles.sports}>
      {sports.map((sport) => (
        <RowList
          id={sport.id}
          key={sport.id}
          title={sport.snippet.title}
          video={sport.snippet.thumbnails.medium.url}
          channel={sport.snippet.channelTitle}
          description={sport.snippet.description}
          click={() => onClickVideo(sport)}
        />
      ))}
    </ul>
  );
});

export default SportsList;
