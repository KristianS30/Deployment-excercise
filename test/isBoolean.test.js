import { expect } from "chai";
import isBoolean from "../src/isBoolean.js";

describe("isBoolean()", () => {
  it("returns true for booleans", () => {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
  });

  it("returns false otherwise", () => {
    expect(isBoolean(null)).to.be.false;
  });
});
