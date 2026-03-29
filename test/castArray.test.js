import { expect } from "chai";
import castArray from "../src/castArray.js";

describe("castArray()", () => {
  it("wraps a value in an array", () => {
    expect(castArray(1)).to.deep.equal([1]);
  });

  it("returns the same array if already array", () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).to.equal(arr);
  });

  it("handles objects", () => {
    expect(castArray({ a: 1 })).to.deep.equal([{ a: 1 }]);
  });

  it("handles null", () => {
    expect(castArray(null)).to.deep.equal([null]);
  });

  it("handles undefined", () => {
    expect(castArray(undefined)).to.deep.equal([undefined]);
  });

  it("handles no arguments", () => {
    expect(castArray()).to.deep.equal([undefined]);
  });
});
