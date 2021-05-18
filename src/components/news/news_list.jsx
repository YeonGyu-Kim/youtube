import { memo } from "react";
import RowList from "../rowList";

const NewsList = memo(({ news, onClickVideo }) => {
  return (
    <ul>
      {news.map((news) => (
        <RowList
          id={news.id}
          key={news.id}
          title={news.snippet.title}
          video={news.snippet.thumbnails.medium.url}
          channel={news.snippet.channelTitle}
          description={news.snippet.description}
          click={() => onClickVideo(news)}
        />
      ))}
    </ul>
  );
});

export default NewsList;
