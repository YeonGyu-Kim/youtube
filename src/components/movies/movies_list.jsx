import { memo } from "react";
import RowList from "../rowList";

const MoviesList = memo(({ movies, onClickVideo }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <RowList
          id={movie.id}
          key={movie.id}
          title={movie.snippet.title}
          video={movie.snippet.thumbnails.medium.url}
          channel={movie.snippet.channelTitle}
          description={movie.snippet.description}
          click={() => onClickVideo(movie)}
        />
      ))}
    </ul>
  );
});

export default MoviesList;
