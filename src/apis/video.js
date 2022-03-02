import { youtube } from "./youtube";

export const getVideoList = async () => {
  const { data } = await youtube.get("videos", {
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 20,
    },
  });
  console.log(data.items)
  return data.items;
};

export const getVideoSearch = async (params) => {
  const { data } = await youtube.get("search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: params,
    },
  });
  console.log(data.items)
  return data.items;
};
