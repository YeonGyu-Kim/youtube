import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: {
        key: key,
        part: "snippet",
        maxResults: 20,
        regionCode: "KR",
      },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        q: query,
        type: "video",
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async sports() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
        videoCategoryId: 17,
      },
    });
    return response.data.items;
  }

  async music() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
        videoCategoryId: 10,
      },
    });
    return response.data.items;
  }

  async games() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
        videoCategoryId: 20,
      },
    });
    return response.data.items;
  }

  async movies() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
        videoCategoryId: 24,
      },
    });
    return response.data;
  }

  async news() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
        videoCategoryId: 25,
      },
    });
    return response.data;
  }
}

export default Youtube;
