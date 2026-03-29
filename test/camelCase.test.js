import { expect } from "chai";
import camelCase from "../src/camelCase.js";

describe("camelCase()", () => {
  it("converts space-separated words", () => {
    expect(camelCase("Test Text")).to.equal("testText");
  });

  it("handles dashes", () => {
    expect(camelCase("--test-text--")).to.equal("testText");
  });

  it("handles underscores and uppercase", () => {
    expect(camelCase("__TEST_TEXT__")).to.equal("testText");
  });

  it("handles empty string", () => {
    expect(camelCase("")).to.equal("");
  });

  it("handles single word", () => {
    expect(camelCase("hello")).to.equal("hello");
  });
});
