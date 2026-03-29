import { expect } from "chai";
import add from "../src/add.js";

describe("add()", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("handles negative numbers", () => {
    expect(add(-2, -3)).to.equal(-5);
  });

  it("throws on invalid input", () => {
    expect(() => add(null, 3)).to.throw();
  });
});
