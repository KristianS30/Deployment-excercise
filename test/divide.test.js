import { expect } from "chai";
import divide from "../src/divide.js";

describe("divide()", () => {
  it("divides numbers correctly", () => {
    expect(divide(6, 4)).to.equal(1.5);
  });

  it("handles division by 1", () => {
    expect(divide(5, 1)).to.equal(5);
  });
});
