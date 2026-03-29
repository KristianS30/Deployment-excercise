import { expect } from "chai";
import filter from "../src/filter.js";

describe("filter()", () => {
  it("filters values correctly", () => {
    expect(filter([1, 2, 3], (x) => x > 1)).to.deep.equal([2, 3]);
  });

  it("returns empty if none match", () => {
    expect(filter([1, 2], (x) => x > 5)).to.deep.equal([]);
  });
});
