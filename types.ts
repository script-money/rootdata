const baseApiUrl = "https://api.rootdata.com/open";
export const searchURL = `${baseApiUrl}/ser_inv`;

export interface SearchData {
  id: number;
  type: number;
  name: string;
  logo: string;
  introduce: string;
  rootdataurl: string;
}

export interface SearchResponse {
  data: SearchData[];
  result: number;
  message?: string;
}
