const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const { previous, lang, token } = req.query;

  if (!validateParameters({ previous, token, lang }, req.query)) {
    res.sendStatus(422);
    return;
  }

  getServiceStatus((status) => {
    res.send(`
      <h1>Service Status</h1>
      <div id=status>
        ${status}
      </div>
      <div>
      <a href="${previous}${token}/${lang}">Back</a>
      </div>
    `);
  });
});

getServiceStatus = (callback) => {
  const status = "All systems are running.";
  callback(status);
};

validateParameters = ({ previous, token, lang }, query) => {
  return (
    Object.keys(query).length <= 3 &&
    typeof lang === "string" &&
    lang.length === 2 &&
    typeof token === "string" &&
    token.length === 16 &&
    typeof previous === "string" &&
    previous.length <= 16
  );
};

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
