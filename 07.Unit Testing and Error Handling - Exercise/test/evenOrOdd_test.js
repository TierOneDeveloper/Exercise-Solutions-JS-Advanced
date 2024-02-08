import { expect } from "chai";
import { isOddOrEven } from "../evenOrOdd.js";

describe("Tests", function () {
  it("returns undefined with non-string value", function () {
    expect(isOddOrEven(1)).to.equal(undefined);
    expect(isOddOrEven([1])).to.equal(undefined);
    expect(isOddOrEven(undefined)).to.equal(undefined);
    expect(isOddOrEven(null)).to.equal(undefined);
    expect(isOddOrEven({})).to.equal(undefined);
  })
  it("works with odd string value", function () {
    expect(isOddOrEven("Hello")).to.equal("odd");
    expect(isOddOrEven("Bye")).to.equal("odd")
    expect(isOddOrEven("working")).to.equal("odd")
    expect(isOddOrEven("Didn't work")).to.equal("odd")

  })
  it("works with even string value", function () {
    expect(isOddOrEven("Work")).to.equal("even");
    expect(isOddOrEven("Work smart")).to.equal("even");
    expect(isOddOrEven("Worksmartnothard")).to.equal("even");
    expect(isOddOrEven("Workingsmart")).to.equal("even");
  })
})