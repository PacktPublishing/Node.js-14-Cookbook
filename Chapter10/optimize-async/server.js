const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27017/";

const express = require("express");
const app = express();

MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  const db = client.db("data");
  const values = db.collection("values");

  app.get("/", (req, res) => {
    values.find({}).toArray(function sum(err, data) {
      if (err) {
        res.send(err);
        return;
      }

      // Calculate average
      const average =
        data.reduce((accumulator, value) => accumulator + value.value, 0) /
        data.length;
      res.send(`Average of all values is ${average}.`);
    });
  });
  app.listen(3000);
});
