import type {
  ProjectData,
  ProjectQueryRequest,
  ProjectQueryResponse,
  SearchData,
  SearchResponse,
} from "./types.js";
import { projectQueryURL, searchURL } from "./types.js";

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

export const projectQuery = async (
  request: ProjectQueryRequest
): Promise<ProjectData | undefined> => {
  const apikey = process.env.ROOTDATA_API_KEY;
  if (!apikey) {
    throw new Error("ROOTDATA_API_KEY is not set in .env");
  }
  const response = await fetch(projectQueryURL, {
    method: "POST",
    headers: {
      apikey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  const responseJson = (await response.json()) as ProjectQueryResponse;
  if (responseJson.result == 404) {
    console.warn(responseJson.message);
    return undefined;
  }
  return responseJson.data;
};
