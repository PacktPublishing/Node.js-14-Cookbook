const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

const mockUser = {
  username: "beth",
  password: "badpassword",
  email: "beth@example.com",
};

app.use(
  session({
    secret: "Node Cookbook",
    name: "SESSIONID",
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: true },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  if (req.session.user) return res.redirect("/account");
  res.send(`
    <h1>Social Media Account - Login</h1>
    <form method="POST" action="/">
      <label> Username <input name=username> </label>
      <label> Password <input name=password type=password> </label>
      <input type=submit>
    </form>
  `);
});

app.post("/", (req, res) => {
  if (
    req.body.username === mockUser.username &&
    req.body.password === mockUser.password
  ) {
    req.session.user = req.body.username;
  }
  if (req.session.user) res.redirect("/account");
  else res.redirect("/");
});

app.get("/account", (req, res) => {
  if (!req.session.user) return res.redirect("/");
  res.send(`
      <h1>Social Media Account - Settings</h1>
      <p> Email: ${mockUser.email} </p>
      <form method="POST" action=/update>
        <input name=email value="${mockUser.email}">
        <input type=submit value=Update >
      </form>
    `);
});

app.post("/update", (req, res) => {
  if (!req.session.user) return res.sendStatus(403);
  mockUser.email = req.body.email;
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
