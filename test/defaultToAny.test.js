import { expect } from "chai";
import defaultToAny from "../src/defaultToAny.js";

describe("defaultToAny()", () => {
  it("returns original value if valid", () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1);
  });

  it("returns first valid default", () => {
    expect(defaultToAny(undefined, 10, 20)).to.equal(10);
  });

  it("skips null values", () => {
    expect(defaultToAny(undefined, null, 20)).to.equal(20);
  });

  it("returns NaN if all defaults invalid", () => {
    expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
  });
});
