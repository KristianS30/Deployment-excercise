import { expect } from "chai";
import map from "../src/map.js";

describe("map()", () => {
  it("maps values correctly", () => {
    expect(map([1, 2, 3], (x) => x * 2)).to.deep.equal([2, 4, 6]);
  });

  it("passes index to iteratee", () => {
    expect(map([1, 2], (x, i) => i)).to.deep.equal([0, 1]);
  });

  it("handles empty array", () => {
    expect(map([], (x) => x)).to.deep.equal([]);
  });

  it("handles null array", () => {
    expect(map(null, (x) => x)).to.deep.equal([]);
  });
});
