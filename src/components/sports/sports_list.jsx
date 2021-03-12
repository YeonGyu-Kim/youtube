import { memo } from "react";
import RowList from "../RowList";

const SportsList = memo(({ result, sports, onClickVideo }) => (
  <ul>
    {sports.map((sport) => (
      <RowList
        key={sport.id}
        title={sport.snippet.title}
        video={sport.snippet.thumbnails.medium.url}
        channel={sport.snippet.channelTitle}
        description={sport.snippet.description}
      />
    ))}
  </ul>
));

export default SportsList;
