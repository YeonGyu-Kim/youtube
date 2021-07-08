import { memo } from "react";
import RowList from "../rowList";
import styles from "./search_list.module.css";

const SearchList = memo(({ search, onClickVideo, display, describe }) => {
  const displayList = display === "list";
  const describeFalse = describe === "false";
  return (
    <ul
      className={`${styles.videos} ${
        displayList ? styles.videoList : styles.videoGrid
      }`}
    >
      {search.map((search) => (
        <RowList
          id={search.id}
          key={search.id}
          title={search.snippet.title}
          video={search.snippet.thumbnails.medium.url}
          channel={search.snippet.channelTitle}
          description={describeFalse ? null : search.snippet.description}
          click={() => onClickVideo(search)}
          describe={describe}
        />
      ))}
    </ul>
  );
});

export default SearchList;
