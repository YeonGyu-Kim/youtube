import { memo } from "react";
import RowList from "../rowList";
import styles from "./games_list.module.css";

const GamesList = memo(({ games, onClickVideo, display, describe }) => {
  const displayList = display === "list";
  const describeFalse = describe === "false";
  return (
    <ul
      className={`${styles.videos} ${
        displayList ? styles.videoList : styles.videoGrid
      }`}
    >
      {games &&
        games.map((game) => (
          <RowList
            id={game.id}
            key={game.id}
            title={game.snippet.title}
            video={game.snippet.thumbnails.medium.url}
            channel={game.snippet.channelTitle}
            description={describeFalse ? null : game.snippet.description}
            click={() => onClickVideo(game)}
            describe={describe}
          />
        ))}
    </ul>
  );
});

export default GamesList;
