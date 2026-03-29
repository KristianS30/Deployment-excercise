import { expect } from "chai";
import defaultTo from "../src/defaultTo.js";

describe("defaultTo()", () => {
  it("returns value if defined", () => {
    expect(defaultTo(1, 10)).to.equal(1);
  });

  it("returns default if undefined", () => {
    expect(defaultTo(undefined, 10)).to.equal(10);
  });

  it("returns default if null", () => {
    expect(defaultTo(null, 10)).to.equal(10);
  });

  it("should return default for NaN (spec)", () => {
    expect(defaultTo(NaN, 10)).to.equal(10);
  });
});
