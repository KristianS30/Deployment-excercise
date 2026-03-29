import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact()", () => {
  it("removes falsey values", () => {
    expect(compact([0, 1, false, 2, "", 3])).to.deep.equal([1, 2, 3]);
  });

  it("returns empty array if all falsey", () => {
    expect(compact([0, false, "", null])).to.deep.equal([]);
  });

  it("keeps truthy values", () => {
    expect(compact([1, "a", true])).to.deep.equal([1, "a", true]);
  });
});
