import { memo } from "react";
import RowList from "../rowList";
import styles from "./sports_list.module.css";

const SportsList = memo(({ result, sports, onClickVideo, display }) => {
  const displayList = display === "list";
  return (
    <ul>
      {sports.map((sport) => (
        <RowList
          id={sport.id}
          key={sport.id}
          title={sport.snippet.title}
          video={sport.snippet.thumbnails.medium.url}
          channel={sport.snippet.channelTitle}
          description={sport.snippet.description}
          click={() => onClickVideo(sport)}
          display={displayList ? styles.list : styles.grid}
        />
      ))}
    </ul>
  );
});

export default SportsList;
