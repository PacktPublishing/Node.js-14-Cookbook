const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // Main thread code
  const worker = new Worker(__filename, {
    workerData: "Beth",
  });
  worker.on("message", (msg) => {
    console.log(msg);
  });
} else {
  // Worker code
  const greeting = `Hello ${workerData}!`;
  parentPort.postMessage(greeting);
}
