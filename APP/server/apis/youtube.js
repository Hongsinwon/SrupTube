import { youtubeInstance } from "./index.js";

export const getVideoList = async () => {
  const {
    data: { items: videos },
  } = await youtubeInstance.get("/videos", {
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: "20",
      regionCode: "KR",
    },
  });
  return videos;
};

export const getVideoSearch = async (params) => {
  const {
    data: { items: videos },
  } = await youtubeInstance.get("/search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: params.q + "",
      type: "video",
    },
  });

  return videos;
};
