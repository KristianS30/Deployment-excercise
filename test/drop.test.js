import { expect } from "chai";
import drop from "../src/drop.js";

describe("drop()", () => {
  it("drops first element by default", () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it("drops n elements", () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
  });

  it("returns empty if n too large", () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
  });

  it("handles n = 0", () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });
});
