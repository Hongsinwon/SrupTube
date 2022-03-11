import axios from "axios";

const youtube = axios.create({
  baseURL: "http://localhost:8080",
  params: { key: process.env.YOUTUBE_API_KEY },
});

export { youtube };
