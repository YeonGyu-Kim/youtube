import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import GlobalStyles from "./components/globalStyles";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoCategory from "./components/video_category/video_category";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SportsList from "./components/sports/sports_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [sportsVideos, setSportsVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube.search(query).then((video) => setVideos(video));
    },
    [youtube]
  );

  useEffect(() => {
    youtube.mostPopular().then((video) => setVideos(video));
  }, [youtube]);

  useEffect(() => {
    youtube.sports().then((sport) => setSportsVideos(sport));
  }, [youtube]);

  console.log(sportsVideos);
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <SearchHeader onSearch={search} selectVideo={selectVideo} />
        <section className={styles.content}>
          {!selectedVideo && (
            <ul className={styles.category}>
              <VideoCategory />
            </ul>
          )}

          <Switch>
            <Route path='/watch/:id'>
              {selectedVideo && (
                <div className={styles.detail}>
                  <VideoDetail video={selectedVideo} />
                  <VideoList
                    videos={videos}
                    onClickVideo={selectVideo}
                    display='list'
                  />
                </div>
              )}
            </Route>
            <Route path={["/", "/home"]} exact>
              {!selectedVideo && (
                <div className={styles.list}>
                  <VideoList
                    videos={videos}
                    onClickVideo={selectVideo}
                    display='grid'
                  />
                </div>
              )}
            </Route>
            <Route path='/sports' exact>
              <div className={styles.sportsList}>
                <SportsList sports={sportsVideos} onClickVideo={selectVideo} />
              </div>
            </Route>
          </Switch>
        </section>
        <GlobalStyles />
      </div>
    </BrowserRouter>
  );
}

export default App;
