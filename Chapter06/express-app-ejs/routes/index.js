const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const title = "Express";
  res.render("index", {
    title: "Express with EJS",
  });
});

module.exports = router;
