import { expect, test } from "bun:test";
import { search } from "../index.js";

test("should search projects", async () => {
  const result = await search("rootdata");
  expect(result.length).toEqual(1);
  const data = result[0];
  const expectJson = {
    introduce:
      "RootData is a visual and structured data provider for crypto projects, offering crypto investors and entrepreneurs fundraising data with more transaction clues. We are committed to becoming a data entry point for discovering high-quality crypto assets.",
    name: "RootData",
    logo: "https://rdbk.rootdata.com/uploads/public/b6/1669727720930.jpg",
    rootdataurl: "https://www.rootdata.com/Projects/detail/RootData?k=NDk5MQ==",
    id: 4991,
    type: 1,
  };
  expect(data).toEqual(expectJson);
});

test("should search projects not exist", async () => {
  const result = await search("asdahdufhj");
  expect(result.length).toEqual(0);
});

test("should search multiple projects", async () => {
  const result = await search("ETH");
  expect(result.length).toBeGreaterThan(1);
});
