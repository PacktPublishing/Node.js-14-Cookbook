const test = require("tape");
test("test integer addition", function (t) {
  t.plan(1);
  t.equal(1 + 1, 2);
});

test("test string addition", function (t) {
  t.plan(1);
  // Expected to fail
  t.equal("1" + "1", 2);
});

