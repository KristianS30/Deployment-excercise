import { expect } from "chai";
import every from "../src/every.js";

describe("every()", () => {
  it("returns true if all pass", () => {
    expect(every([1, 2, 3], (x) => x > 0)).to.be.true;
  });

  it("returns false if any fail", () => {
    expect(every([1, 2, 3], (x) => x > 2)).to.be.false;
  });

  it("returns true for empty array", () => {
    expect(every([], Boolean)).to.be.true;
  });
});
