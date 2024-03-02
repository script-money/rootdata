import { expect, test } from "bun:test";
import { projectQuery } from "../index.js";

test("should search rootdata", async () => {
  const result = await projectQuery({ project_id: 4991 });
  const expectJson = {
    similar_project: [
      {
        project_id: 11461,
        brief_description: "Web3 browser and knowledge graph app",
        logo: "https://rdbk.rootdata.com/uploads/public/b6/1708763677675.png",
        project_name: "Geo",
      },
      {
        project_id: 39,
        brief_description: "Decentralized knowledge graph️",
        logo: "https://rdbk.rootdata.com/uploads/public/b15/1666345038053.jpg",
        project_name: "OriginTrail",
      },
      {
        project_id: 2334,
        brief_description: "Decentralized canonical knowledge graph",
        logo: "https://rdbk.rootdata.com/uploads/public/b19/1668410257959.jpg",
        project_name: "Golden Protocol",
      },
      {
        project_id: 8846,
        brief_description: "Decentralized Event Knowledge Graph Protocol",
        logo: "https://www.rootdata.com/uploads/public/p3330/1691120183509.png",
        project_name: "UPTO3",
      },
      {
        project_id: 6033,
        brief_description: "Decentralized encyclopedia",
        logo: "https://rdbk.rootdata.com/uploads/public/b6/1671252675526.jpg",
        project_name: "Lunyr",
      },
    ],
    project_id: 4991,
    one_liner: "Visual and structured crypto projects data provider",
    logo: "https://rdbk.rootdata.com/uploads/public/b6/1669727720930.jpg",
    description:
      "RootData is a visual and structured data provider for crypto projects, offering crypto investors and entrepreneurs fundraising data with more transaction clues. We are committed to becoming a data entry point for discovering high-quality crypto assets.",
    rootdataurl: "https://www.rootdata.com/Projects/detail/RootData?k=NDk5MQ==",
    token_symbol: "",
    project_name: "RootData",
    investors: [],
    establishment_date: "2022",
    tags: ["Tools", "Data & Analysis", "Knowledge Graph"],
    social_media: {
      website: "https://www.rootdata.com/",
      discord: "https://discord.gg/AeKsqq9738",
      gitbook: "",
      X: "https://twitter.com/RootDataLabs",
      medium: "",
    },
  };

  expect(result).toEqual(expectJson);
});

test("should return undefined", async () => {
  const result = await projectQuery({ project_id: 49912323 });
  expect(result).toBeUndefined();
});
