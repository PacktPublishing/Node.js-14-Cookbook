const test = require("tape");
const calculator = require("./../calculator.js");

test("test add integers 1 and 2", (t) => {
  t.plan(1);
  t.equal(calculator.add(1, 2), 3);
});

test("test add strings 1 and 2", (t) => {
  t.plan(1);
  t.equal(calculator.add("1", "2"), 3);
});
