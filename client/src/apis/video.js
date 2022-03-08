import { youtube } from "./youtube";

export const getVideoList = async () => {
  const {
    data: { items: videos },
  } = await youtube.get("/videos", {
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
  } = await youtube.get("/search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: params,
      type: "video",
    },
  });

  return videos;
};
