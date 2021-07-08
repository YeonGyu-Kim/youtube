import { memo } from "react";
import RowList from "../rowList";
import styles from "./movies_list.module.css";

const MoviesList = memo(({ movies, onClickVideo, display, describe }) => {
  const displayList = display === "list";
  const describeFalse = describe === "false";
  return (
    <ul
      className={`${styles.videos} ${
        displayList ? styles.videoList : styles.videoGrid
      }`}
    >
      {movies.map((movie) => (
        <RowList
          id={movie.id}
          key={movie.id}
          title={movie.snippet.title}
          video={movie.snippet.thumbnails.medium.url}
          channel={movie.snippet.channelTitle}
          description={describeFalse ? null : movie.snippet.description}
          click={() => onClickVideo(movie)}
          describe={describe}
        />
      ))}
    </ul>
  );
});

export default MoviesList;
