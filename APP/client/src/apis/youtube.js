import axios from "axios";

const youtube = axios.create({
  baseURL: "http://localhost:8080",
  params: { key: `AIzaSyBvWO_Dj3xmfcuS-nnFUjP7DV6uPdfUsDw` },
});

export { youtube };
