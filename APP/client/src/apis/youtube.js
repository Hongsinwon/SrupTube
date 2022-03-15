import axios from "axios";

const youtube = axios.create({
  baseURL: "https://sruptube.herokuapp.com/",
  params: { key: `유튜브 api Key` },
});

export { youtube };
