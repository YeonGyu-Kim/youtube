import { memo } from "react";
import RowList from "../rowList";
import styles from "./news_list.module.css";

const NewsList = memo(
  ({ news: { items }, onClickVideo, display, describe }) => {
    const displayList = display === "list";
    const describeFalse = describe === "false";

    return (
      <ul
        className={`${styles.videos} ${
          displayList ? styles.videoList : styles.videoGrid
        }`}
      >
        {items &&
          items.map((news) => (
            <RowList
              id={news.id}
              key={news.id}
              title={news.snippet.title}
              video={news.snippet.thumbnails.medium.url}
              channel={news.snippet.channelTitle}
              description={describeFalse ? null : news.snippet.description}
              click={() => onClickVideo(news)}
              describe={describe}
            />
          ))}
      </ul>
    );
  }
);

export default NewsList;
