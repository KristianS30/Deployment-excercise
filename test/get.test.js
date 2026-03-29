import { expect } from "chai";
import get from "../src/get.js";

describe("get()", () => {
  it("gets nested value", () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, "a[0].b.c")).to.equal(3);
  });

  it("returns default if undefined", () => {
    expect(get({}, "a.b", "default")).to.equal("default");
  });
});
