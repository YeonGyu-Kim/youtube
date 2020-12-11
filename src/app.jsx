import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import GlobalStyles from "./components/globalStyles";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube.search(query).then((video) => setVideos(video));
  };
  useEffect(() => {
    youtube.mostPopular().then((video) => setVideos(video));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
      <GlobalStyles />
    </div>
  );
}

export default App;
