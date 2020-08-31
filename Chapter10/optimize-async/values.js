const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27017/";

let values = [];
const numberOfValues = 1000;

let count = 0;
for (count; count < numberOfValues; count++) {
  values.push({ value: Math.round(Math.random() * 100000) });
}

MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db("data");

  db.collection("values").insertMany(values, (err) => {
    if (err) throw err;
    console.log(`Added ${numberOfValues} random values.`);
    client.close();
  });
});
