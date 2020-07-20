const { Router } = require("express");
const fetch = require("node-fetch");

const router = Router();

router.get("/", function (req, res) {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((json) =>
      res.render("inventory", {
        books: json,
      })
    )
    .catch((error) => {
      res.render("error", {
        error: error,
        message: error.message,
      });
    });
});

router.post("/add", function (req, res) {
  console.log(req.body);

  fetch("http://localhost:3000/books", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" },
  })
    .then(res.redirect("/inventory"))
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
