import axios from "axios";

const youtube = axios.create({
  baseURL: "https://sruptube.herokuapp.com/",
  params: { key: `AIzaSyBvWO_Dj3xmfcuS-nnFUjP7DV6uPdfUsDw` },
});

export { youtube };
