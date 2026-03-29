import { expect } from "chai";
import isObjectLike from "../src/isObjectLike.js";

describe("isObjectLike()", () => {
  it("returns true for objects", () => {
    expect(isObjectLike({})).to.be.true;
  });

  it("returns true for arrays", () => {
    expect(isObjectLike([1, 2, 3])).to.be.true;
  });

  it("returns false for functions", () => {
    expect(isObjectLike(() => {})).to.be.false;
  });

  it("returns false for null", () => {
    expect(isObjectLike(null)).to.be.false;
  });
});
