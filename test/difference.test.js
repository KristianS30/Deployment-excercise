import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference()", () => {
  it("removes values from array", () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });

  it("returns empty if no array", () => {
    expect(difference(null, [1])).to.deep.equal([]);
  });

  it("handles multiple arrays", () => {
    expect(difference([1, 2, 3], [2], [3])).to.deep.equal([1]);
  });
});
