import axios from "axios";

const youtubeInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: `AIzaSyBvWO_Dj3xmfcuS-nnFUjP7DV6uPdfUsDw` },
});

export { youtubeInstance };
