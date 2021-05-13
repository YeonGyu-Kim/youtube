import { memo } from "react";
import RowList from "../rowList";

const GamesList = memo(({ games, onClickVideo }) => {
  return (
    <ul>
      {games.map((game) => (
        <RowList
          id={game.id}
          key={game.id}
          title={game.snippet.title}
          video={game.snippet.thumbnails.medium.url}
          channel={game.snippet.channelTitle}
          description={game.snippet.description}
          click={() => onClickVideo(game)}
        />
      ))}
    </ul>
  );
});

export default GamesList;
