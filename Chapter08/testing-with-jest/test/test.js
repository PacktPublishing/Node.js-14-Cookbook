const uppercase = require("./../uppercase");

describe("uppercase", () => {
  test("uppercase hello returns HELLO", () => {
    expect(uppercase("hello")).toBe("HELLO");
  });

});
