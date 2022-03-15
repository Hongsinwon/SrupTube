import axios from "axios";

const youtubeInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: `Youtube API key` },
});

export { youtubeInstance };
