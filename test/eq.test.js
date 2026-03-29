import { expect } from "chai";
import eq from "../src/eq.js";

describe("eq()", () => {
  it("compares primitives", () => {
    expect(eq("a", "a")).to.be.true;
  });

  it("compares objects by reference", () => {
    const obj = {};
    expect(eq(obj, obj)).to.be.true;
  });

  it("returns false for different objects", () => {
    expect(eq({}, {})).to.be.false;
  });

  it("handles NaN", () => {
    expect(eq(NaN, NaN)).to.be.true;
  });
});
