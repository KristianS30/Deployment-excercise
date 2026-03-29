import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk()", () => {
  it("splits array into chunks of given size", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("handles uneven chunks", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).to.deep.equal([
      ["a", "b", "c"],
      ["d"],
    ]);
  });

  it("defaults size to 1", () => {
    expect(chunk(["a", "b"])).to.deep.equal([["a"], ["b"]]);
  });

  it("returns empty array for empty input", () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });

  it("returns empty array if size is 0", () => {
    expect(chunk(["a", "b"], 0)).to.deep.equal([]);
  });

  it("returns empty array if array is null", () => {
    expect(chunk(null, 2)).to.deep.equal([]);
  });
});
