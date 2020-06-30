const assert = require("chai").assert;
const calculator = require("../calculator.js");

describe("Calculator Test", function () {
  describe("add() Test", function () {
    it("add(1,2) should return 3", function () {
      assert.equal(calculator.add(1, 2), 3);
    });

    it("add('1','2') should return 3", function () {
      assert.equal(calculator.add("1", "2"), 3);
    });
  });
});
