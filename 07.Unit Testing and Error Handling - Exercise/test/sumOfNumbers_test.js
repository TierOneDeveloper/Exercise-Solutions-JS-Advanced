import { sum } from "../sumOfNumbers.js"
import { expect, assert, should } from "chai";

describe("Suite Demo", function () {
  it("works with number array", function () {
    const arr = [1, 1, 1];
    expect(sum(arr)).to.equal(3);
  })

  it("throws error for non-array params", function () {
    expect(() => sum(1)).to.throw;
  })

  it("returns 0 for empty array", function () {
    const arr = [];
    expect(sum(arr)).to.equal(0);
  })

  it("returns 1 for array with 1 element", function () {
    expect(sum([1])).to.equal(1);
  })
})
