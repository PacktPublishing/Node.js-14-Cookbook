const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
