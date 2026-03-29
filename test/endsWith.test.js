import { expect } from "chai";
import endsWith from "../src/endsWith.js";

describe("endsWith()", () => {
  it("returns true if string ends with target", () => {
    expect(endsWith("abc", "c")).to.be.true;
  });

  it("returns false otherwise", () => {
    expect(endsWith("abc", "b")).to.be.false;
  });

  it("respects position", () => {
    expect(endsWith("abc", "b", 2)).to.be.true;
  });
});
