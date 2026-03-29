import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize()", () => {
  it("capitalizes a lowercase word", () => {
    expect(capitalize("hello")).to.equal("Hello");
  });

  it("lowercases the rest of the string", () => {
    expect(capitalize("FRED")).to.equal("Fred");
  });

  it("handles mixed case", () => {
    expect(capitalize("hELLo")).to.equal("Hello");
  });

  it("handles empty string", () => {
    expect(capitalize("")).to.equal("");
  });
});
