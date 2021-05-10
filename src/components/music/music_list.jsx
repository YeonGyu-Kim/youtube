import { memo } from "react";
import RowList from "../rowList";

const MusicList = memo(({ music, onClickVideo }) => {
  return (
    <ul>
      {music.map((music) => (
        <RowList
          id={music.id}
          key={music.id}
          title={music.snippet.title}
          video={music.snippet.thumbnails.medium.url}
          channel={music.snippet.channelTitle}
          description={music.snippet.description}
          click={() => onClickVideo(music)}
        />
      ))}
    </ul>
  );
});

export default MusicList;
