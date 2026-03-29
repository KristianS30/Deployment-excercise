import { expect } from "chai";
import countBy from "../src/countBy.js";

describe("countBy()", () => {
  it("counts by property", () => {
    const users = [{ active: true }, { active: true }, { active: false }];

    expect(countBy(users, (x) => x.active)).to.deep.equal({
      true: 2,
      false: 1,
    });
  });

  it("works with numbers", () => {
    expect(countBy([1, 2, 3, 4], (n) => n % 2)).to.deep.equal({ 1: 2, 0: 2 });
  });
});
