import { mathEnforcer } from "../mathEnforcer.js";
import { expect } from "chai";

describe("mathEnforcer", function () {
  describe("addFive", function () {
    it("should return undefined with non number argument", function () {
      expect(mathEnforcer.addFive("a")).to.equal(undefined);
      expect(mathEnforcer.addFive([1])).to.equal(undefined);
      expect(mathEnforcer.addFive({})).to.equal(undefined);
      expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
      expect(mathEnforcer.addFive(null)).to.equal(undefined);
    })
    it("should return correct result with number argument", function () {
      expect(mathEnforcer.addFive(0)).to.equal(5);
      expect(mathEnforcer.addFive(1)).to.equal(6);
      expect(mathEnforcer.addFive(-1)).to.equal(4);
      expect(mathEnforcer.addFive(0.1)).to.equal(5.1);
      expect(mathEnforcer.addFive(-0.1)).to.equal(4.9);
    })
  })

  describe("subtractTen", function () {
    it("should return undefined with non number argument", function () {
      expect(mathEnforcer.subtractTen("a")).to.equal(undefined);
      expect(mathEnforcer.subtractTen([1])).to.equal(undefined);
      expect(mathEnforcer.subtractTen({})).to.equal(undefined);
      expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
      expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
    })
    it("should return correct result with number argument", function () {
      expect(mathEnforcer.subtractTen(0)).to.equal(-10);
      expect(mathEnforcer.subtractTen(1)).to.equal(-9);
      expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
      expect(mathEnforcer.subtractTen(0.1)).to.equal(-9.9);
      expect(mathEnforcer.subtractTen(-0.1)).to.equal(-10.1);
    })
  })

  describe("sum", function () {
    it("should return undefined with first non number argument", function () {
      expect(mathEnforcer.sum("string", 1)).to.equal(undefined);
      expect(mathEnforcer.sum([1], 1)).to.equal(undefined);
      expect(mathEnforcer.sum({}, 1)).to.equal(undefined);
      expect(mathEnforcer.sum(undefined, 1)).to.equal(undefined);
      expect(mathEnforcer.sum(null, 1)).to.equal(undefined);

      expect(mathEnforcer.sum("string", 0.1)).to.equal(undefined);
      expect(mathEnforcer.sum([1], 0.1)).to.equal(undefined);
      expect(mathEnforcer.sum({}, 0.1)).to.equal(undefined);
      expect(mathEnforcer.sum(undefined, 0.1)).to.equal(undefined);
      expect(mathEnforcer.sum(null, 0.1)).to.equal(undefined);

      expect(mathEnforcer.sum("string", -1)).to.equal(undefined);
      expect(mathEnforcer.sum([1], -1)).to.equal(undefined);
      expect(mathEnforcer.sum({}, -1)).to.equal(undefined);
      expect(mathEnforcer.sum(undefined, -1)).to.equal(undefined);
      expect(mathEnforcer.sum(null, -1)).to.equal(undefined);

      expect(mathEnforcer.sum("string", -0.1)).to.equal(undefined);
      expect(mathEnforcer.sum([1], -0.1)).to.equal(undefined);
      expect(mathEnforcer.sum({}, -0.1)).to.equal(undefined);
      expect(mathEnforcer.sum(undefined, -0.1)).to.equal(undefined);
      expect(mathEnforcer.sum(null, -0.1)).to.equal(undefined);
    })

    it("should return undefined with second non number argument", function () {
      expect(mathEnforcer.sum(1, "string")).to.equal(undefined);
      expect(mathEnforcer.sum(1, [1])).to.equal(undefined);
      expect(mathEnforcer.sum(1, {})).to.equal(undefined);
      expect(mathEnforcer.sum(1, undefined)).to.equal(undefined);
      expect(mathEnforcer.sum(1, null)).to.equal(undefined);

      expect(mathEnforcer.sum(-1, "string")).to.equal(undefined);
      expect(mathEnforcer.sum(-1, [1])).to.equal(undefined);
      expect(mathEnforcer.sum(-1, {})).to.equal(undefined);
      expect(mathEnforcer.sum(-1, undefined)).to.equal(undefined);
      expect(mathEnforcer.sum(-1, null)).to.equal(undefined);


      expect(mathEnforcer.sum(-0.1, "string")).to.equal(undefined);
      expect(mathEnforcer.sum(-0.1, [1])).to.equal(undefined);
      expect(mathEnforcer.sum(-0.1, {})).to.equal(undefined);
      expect(mathEnforcer.sum(-0.1, undefined)).to.equal(undefined);
      expect(mathEnforcer.sum(-0.1, null)).to.equal(undefined);

      expect(mathEnforcer.sum(0.1, "string")).to.equal(undefined);
      expect(mathEnforcer.sum(0.1, [1])).to.equal(undefined);
      expect(mathEnforcer.sum(0.1, {})).to.equal(undefined);
      expect(mathEnforcer.sum(0.1, undefined)).to.equal(undefined);
      expect(mathEnforcer.sum(0.1, null)).to.equal(undefined)
    })

    it("should return correct value with valid arguments", function () {
      expect(mathEnforcer.sum(0, 0)).to.equal(0);
      expect(mathEnforcer.sum(0, 1)).to.equal(1);
      expect(mathEnforcer.sum(0, -1)).to.equal(-1);
      expect(mathEnforcer.sum(1, 0)).to.equal(1);
      expect(mathEnforcer.sum(-1, 0)).to.equal(-1);

      expect(mathEnforcer.sum(0.1, -1)).to.equal(-0.9);
      expect(mathEnforcer.sum(0.1, 1)).to.equal(1.1);
      expect(mathEnforcer.sum(1, 0.1)).to.equal(1.1);
      expect(mathEnforcer.sum(-1, 0.1)).to.equal(-0.9);
      expect(mathEnforcer.sum(1, -0.1)).to.equal(0.9);
      expect(mathEnforcer.sum(-1, -0.1)).to.equal(-1.1);
      expect(mathEnforcer.sum(-0.1, -1)).to.equal(-1.1);
      expect(mathEnforcer.sum(-0.1, 1)).to.equal(0.9);
    })
  })
})