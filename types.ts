const baseApiUrl = "https://api.rootdata.com/open";
export const searchURL = `${baseApiUrl}/ser_inv`;
export const projectQueryURL = `${baseApiUrl}/get_item`;

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

export interface ProjectQueryRequest {
  project_id?: number; // The unique identifier of the project. If both `project_id` and `contract_address` are provided, `project_id` will take precedence.
  include_team?: boolean; // Whether to include team member information; defaults to false
  include_investors?: boolean; // Whether to include investor information. Defaults to false
  contract_address?: string; // The Ethereum contract address. This parameter is optional, and will be used only if the `project_id` is not provided or applicable. Please note that if both `project_id` and `contract_address` are present, `project_id` has priority.
}

type SimilarProject = {
  project_id: number;
  brief_description: string;
  logo: string;
  project_name: string;
};

type SocialMedia = {
  website?: string;
  discord?: string;
  gitbook?: string;
  X?: string;
  medium?: string;
};

export interface ProjectQueryResponse {
  data?: ProjectData;
  message?: string;
  result: number;
}

interface Investor {
  name: string;
  logo: string;
}

export interface ProjectData {
  project_id: number;
  project_name: string;
  logo: string;
  token_symbol: string;
  establishment_date: string;
  one_liner: string;
  description: string;
  tags: string[];
  social_media: SocialMedia;
  ecosystem?: string[];
  investors?: Investor[];
  total_funding?: number;
  rootdataurl: string;
  contract_address?: string;
  fully_diluted_market_cap?: number;
  market_cap?: number;
  price?: number;
  event?: { title: string; date: string; description?: string }[];
  similar_project?: SimilarProject[];
  reports?: { title: string; date: string; link: string }[];
  team_members?: { name: string; role: string; photo_url?: string }[];
}
