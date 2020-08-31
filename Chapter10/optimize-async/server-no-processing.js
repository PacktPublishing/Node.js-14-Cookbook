const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27017/";

const express = require("express");
const app = express();

MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db("data");
  const average = db.collection("averages");

  app.get("/", (req, res) => {
    average.findOne({}, (err, data) => {
      if (err) throw err;
      res.send(`Average of all values is ${data.value}.`);
    });
  });
  app.listen(3000);
});
