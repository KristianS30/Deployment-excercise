import { expect } from "chai";
import slice from "../src/slice.js";

describe("slice()", () => {
  it("slices array", () => {
    expect(slice([1, 2, 3, 4], 1, 3)).to.deep.equal([2, 3]);
  });

  it("handles negative start", () => {
    expect(slice([1, 2, 3], -1)).to.deep.equal([3]);
  });
});
