const express = require("express");
const app = express();
const random = require("./random");

app.get("/:number", (req, res) => {
  const number = req.params.number;
  res.send(random(number).toString());
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
