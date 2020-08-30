const http = require("http");

const server = http.createServer((req, res) => {
  server.setMaxListeners(1);

  server.on("connection", () => {
    console.log("connected");
  });
  res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
