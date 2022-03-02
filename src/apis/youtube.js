import axios from "axios";

const youtube = axios.create({
  baseURL: "/youtube/v3",
  params: { key: `AIzaSyBvWO_Dj3xmfcuS-nnFUjP7DV6uPdfUsDw` },
});

export { youtube };
