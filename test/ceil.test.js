import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil()", () => {
  it("rounds up to nearest integer", () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it("handles positive precision", () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it("handles negative precision", () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });

  it("returns same number if already integer", () => {
    expect(ceil(5)).to.equal(5);
  });
});
