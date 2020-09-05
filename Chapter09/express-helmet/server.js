const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(helmet());

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

