const express = require("express");
const app = express();

app.get("/", (req, res) => {
  asyncWork(() => {
    let msg = req.query.msg;
    if (Array.isArray(msg)) msg = msg.pop();
    const upper = (msg || "").toUpperCase();
    res.send(upper);
  });
});

asyncWork = (callback) => {
  setTimeout(callback, 0);
};

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
