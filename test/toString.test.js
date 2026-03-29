import { expect } from "chai";
import toString from "../src/toString.js";

describe("toString()", () => {
  it("returns string unchanged", () => {
    expect(toString("abc")).to.equal("abc");
  });

  it("converts null to empty string", () => {
    expect(toString(null)).to.equal("");
  });

  it("converts undefined to empty string", () => {
    expect(toString(undefined)).to.equal("");
  });

  it("converts arrays", () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3");
  });

  it("handles -0 correctly", () => {
    expect(toString(-0)).to.equal("-0");
  });

  it("converts symbols", () => {
    const sym = Symbol("a");
    expect(toString(sym)).to.equal(sym.toString());
  });
});
