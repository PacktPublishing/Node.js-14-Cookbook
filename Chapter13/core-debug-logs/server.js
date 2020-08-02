const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");

  setInterval(() => {
    console.log("Server listening...");
  }, 3000);
});
