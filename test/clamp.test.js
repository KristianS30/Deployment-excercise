import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp()", () => {
  it("clamps value below lower bound", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  it("clamps value above upper bound", () => {
    expect(clamp(10, -5, 5)).to.equal(5);
  });

  it("returns number within bounds unchanged", () => {
    expect(clamp(3, -5, 5)).to.equal(3);
  });

  it("handles string numbers", () => {
    expect(clamp("10", "-5", "5")).to.equal(5);
  });

  it("handles NaN input", () => {
    expect(clamp(NaN, -5, 5)).to.be.NaN;
  });
});
