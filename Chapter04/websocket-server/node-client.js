const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:3000");

ws.on("open", () => {
  console.log("Connected");
});

ws.on("close", () => {
  console.log("Disconnected");
});

ws.on("message", (message) => {
  console.log("Received:", message);
});

setInterval(() => {
  ws.send("Hello");
}, 3000);
