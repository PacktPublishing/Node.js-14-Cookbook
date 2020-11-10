const express = require("express");
const app = express();
const debug = require("debug")("my-server");

app.get("/", (req, res) => {
  debug("HTTP GET request to /");
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
