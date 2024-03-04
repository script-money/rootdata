import type {
  ProjectData,
  ProjectQueryRequest,
  ProjectQueryResponse,
  SearchData,
  SearchResponse,
} from "./types.js";
import { projectQueryURL, searchURL } from "./types.js";

const getApiKey = (): string => {
  const apikey = process.env.ROOTDATA_API_KEY;
  if (!apikey) {
    throw new Error("ROOTDATA_API_KEY is not set in .env");
  }
  return apikey;
};

export const search = async (
  keywords: string,
  apikey: string = getApiKey()
): Promise<SearchData[]> => {
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
  request: ProjectQueryRequest,
  apikey: string = getApiKey()
): Promise<ProjectData | undefined> => {
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
