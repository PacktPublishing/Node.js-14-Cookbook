const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.send(recursiveContent());
});

function recursiveContent(content, i = 15) {
  --i;
  if (i !== 0) {
    return recursiveContent(content, i);
  } else {
    return content.undefined_property;
  }
}

module.exports = router;
