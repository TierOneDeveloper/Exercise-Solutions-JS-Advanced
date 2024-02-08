import { expect } from "chai";
import { lookupChar } from "../charLookup.js";

describe("Test", function () {
  it("returns undefined with non-string value", function () {
    expect(lookupChar(2, 1)).to.equal(undefined);
    expect(lookupChar([1], 1)).to.equal(undefined);
    expect(lookupChar({}, 1)).to.equal(undefined);
  })
  it("returns undefined with non integer index", function () {
    expect(lookupChar("string", 1.1)).to.equal(undefined);
    expect(lookupChar("string", 0.1)).to.equal(undefined);
  })
  it("returns - /Incorect index/ with invalid index value", function () {
    expect(lookupChar("string", -1)).to.equal("Incorrect index");
    expect(lookupChar("string", 8)).to.equal("Incorrect index");
    expect(lookupChar("string", 7)).to.equal("Incorrect index");
  })
  it("returns correct value", function () {
    expect(lookupChar("string", 1)).to.equal("t");
    expect(lookupChar("string", 0)).to.equal("s");
  })
})