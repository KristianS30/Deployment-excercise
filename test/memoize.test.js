import { expect } from "chai";
import memoize from "../src/memoize.js";

describe("memoize()", () => {
  it("caches function results", () => {
    let calls = 0;
    const fn = memoize((x) => {
      calls++;
      return x * 2;
    });

    fn(2);
    fn(2);

    expect(calls).to.equal(1);
  });

  it("uses resolver if provided", () => {
    const fn = memoize(
      (a, b) => a + b,
      (a, b) => `${a}-${b}`,
    );

    expect(fn(1, 2)).to.equal(3);
    expect(fn(1, 2)).to.equal(3);
  });

  it("throws if func is not function", () => {
    expect(() => memoize(123)).to.throw();
  });
});
