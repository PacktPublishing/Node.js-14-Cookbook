const express = require("express");
const app = express();

app.get("/", (req, res) => {
  asyncWork(() => {
    const upper = (req.query.msg || "").toUpperCase();
    res.send(upper);
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

asyncWork = (callback) => {
  setTimeout(callback, 0);
};

