import { expect } from "chai";
import isObject from "../src/isObject.js";

describe("isObject()", () => {
  it("returns true for objects", () => {
    expect(isObject({})).to.be.true;
  });

  it("returns false for null", () => {
    expect(isObject(null)).to.be.false;
  });
});
