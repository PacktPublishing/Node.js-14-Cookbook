const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

const n = 10;
// Fibonacci calculator
const fibonacci = (n) => {
  let a = 0, b = 1, next = 1, i = 2;
  for (i; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return next;
};

if (isMainThread) {
  // Main thread code
  const worker = new Worker(__filename, {
    workerData: n,
  });
  worker.on("message", (msg) => {
    console.log(`The Fibonacci number at position ${n} is ${msg}`);
  });
  console.log("...");
} else {
  // Worker code
  parentPort.postMessage(fibonacci(workerData));
}
