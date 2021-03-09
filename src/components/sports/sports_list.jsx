import RowList from "../RowList";

const SportsList = ({ result, sports, onClickVideo }) => (
  <ul>
    {sports.map((sport) => (
      <RowList
        key={sport.id}
        title={sport.snippet.title}
        video={sport.snippet.thumbnails.medium.url}
        description={sport.snippet.description}
      />
    ))}
  </ul>
);

export default SportsList;
