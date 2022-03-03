import { youtube } from "./youtube";

export const getVideoSearch = async (params) => {
  const { data } = await youtube.get("search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: params,
      type: "video",
    },
  });

  return data.items;
};
