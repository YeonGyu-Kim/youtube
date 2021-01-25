import RowList from "../RowList";

const SportsList = ({ result, sports, onClickVideo }) => (
  <ul>
    {sports.map((sport) => (
      <RowList title={sport.snippet.title} key={sport.id} />
    ))}
  </ul>
);

export default SportsList;
