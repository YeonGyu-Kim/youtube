import React, { useEffect, useState } from "react";
import "./app.css";
import GlobalStyles from "./components/globalStyles";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const videosApi = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCXyd4kmmjGhrti-pYqfAoQlbJ1b-Cz9zg",
      videosApi
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <GlobalStyles />
      <VideoList key={videos.id} videos={videos} />
    </>
  );
}

export default App;
