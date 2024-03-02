import type { SearchData, SearchResponse } from "./types.js";
import { searchURL } from "./types.js";

export const search = async (keywords: string): Promise<SearchData[]> => {
  const apikey = process.env.ROOTDATA_API_KEY;
  if (!apikey) {
    throw new Error("ROOTDATA_API_KEY is not set in .env");
  }
  const response = await fetch(searchURL, {
    method: "POST",
    headers: {
      apikey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: keywords }),
  });
  const responseJson = (await response.json()) as SearchResponse;
  if (responseJson.message) {
    console.warn(responseJson.message);
    return [];
  } else {
    return responseJson.data;
  }
};
