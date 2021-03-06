class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequsetOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequsetOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.key}`,
      this.getRequsetOptions
    );
    const result = await response.json();
    const items = result.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  }
}

export default YoutubeFetch;
