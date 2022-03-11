import { youtube } from "./youtube";

export const getVideoList = async () => {
  const { data } = await youtube.get("/videos", {
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: "20",
      regionCode: "KR",
    },
  });
  return data;
};

export const getVideoSearch = async (params) => {
  const { data } = await youtube.get("/search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: params.q,
      type: "video",
    },
  });
  return data;
};
