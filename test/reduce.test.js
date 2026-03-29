import { expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce()", () => {
  it("reduces array to sum", () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).to.equal(6);
  });

  it("works without initial accumulator", () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).to.equal(6);
  });

  it("reduces object values", () => {
    const obj = { a: 1, b: 2 };
    const result = reduce(obj, (sum, v) => sum + v, 0);
    expect(result).to.equal(3);
  });
});
