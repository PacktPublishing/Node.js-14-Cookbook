const benchmark = require("benchmark");
const slow = require("./slow");
const loop = require("./loop");
const suite = new benchmark.Suite();
const maxNumber = 100; // number to pass through to sumOfSquares()

suite.add("slow", function () {
  slow(maxNumber);
});

suite.add("loop", function () {
  loop(maxNumber);
});

suite.on("complete", printResults);
suite.run();

function printResults() {
  this.forEach((benchmark) => {
    console.log(benchmark.toString());
  });
  console.log("Fastest implementation is", this.filter("fastest")[0].name);
}
