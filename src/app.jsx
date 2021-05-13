import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import GlobalStyles from "./components/globalStyles";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoCategory from "./components/video_category/video_category";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SportsList from "./components/sports/sports_list";
import MusicList from "./components/music/music_list";
import MoviesList from "./components/movies/movies_list";
import GamesList from "./components/games/games_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [musicVideos, setMusicVideos] = useState([]);
  const [sportsVideos, setSportsVideos] = useState([]);
  const [gamesVideos, setGamesVideos] = useState([]);
  const [moviesVideos, setMoviesVideos] = useState([]);
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
    youtube.sports().then((video) => setSportsVideos(video));
  }, [youtube]);

  useEffect(() => {
    youtube.music().then((video) => setMusicVideos(video));
  }, [youtube]);

  useEffect(() => {
    youtube.games().then((video) => setGamesVideos(video));
  });

  useEffect(() => {
    youtube.movies().then((video) => setMoviesVideos(video));
  });

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <SearchHeader onSearch={search} selectVideo={selectVideo} />
        <Switch>
          <Route path='/watch/v=:id'>
            {selectedVideo && (
              <div className={`${styles.detail} `}>
                <VideoDetail video={selectedVideo} />
                <VideoList
                  videos={videos}
                  onClickVideo={selectVideo}
                  display='list'
                  category='popular'
                />
                )
              </div>
            )}
          </Route>
          <Route path={["/", "/home"]} exact>
            <section className={styles.content}>
              <ul className={styles.category}>
                <VideoCategory />
              </ul>
              <div className={styles.list}>
                <VideoList
                  videos={videos}
                  onClickVideo={selectVideo}
                  display='grid'
                  category='popular'
                />
              </div>
            </section>
          </Route>
          <Route path='/sports' exact>
            <section className={styles.content}>
              <ul className={styles.category}>
                <VideoCategory />
              </ul>
              <div className={styles.sportsList}>
                <SportsList
                  sports={sportsVideos}
                  onClickVideo={selectVideo}
                  display='list'
                />
              </div>
            </section>
          </Route>
          <Route path='/music' exact>
            <section className={styles.content}>
              <ul className={styles.category}>
                <VideoCategory />
              </ul>
              <div className={styles.musicList}>
                <MusicList
                  music={musicVideos}
                  onClickVideo={selectVideo}
                  display='list'
                />
              </div>
            </section>
          </Route>
          <Route path='/games' exact>
            <section className={styles.content}>
              <ul className={styles.category}>
                <VideoCategory />
              </ul>
              <div className={styles.gamesList}>
                <GamesList
                  games={gamesVideos}
                  onClickVideo={selectVideo}
                  display='list'
                />
              </div>
            </section>
          </Route>
          <Route path='/movies' exact>
            <section className={styles.content}>
              <ul className={styles.category}>
                <VideoCategory />
              </ul>
              <div className={styles.moviesList}>
                <MoviesList
                  movies={moviesVideos}
                  onClickVideo={selectVideo}
                  display='list'
                />
              </div>
            </section>
          </Route>
        </Switch>
        <GlobalStyles />
      </div>
    </BrowserRouter>
  );
}

export default App;
