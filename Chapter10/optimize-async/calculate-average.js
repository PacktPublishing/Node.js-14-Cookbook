const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27017/";

MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db("data");
  const values = db.collection("values");
  const averages = db.collection("averages");

  values.find({}).toArray((err, data) => {
    if (err) throw err;

    // Calculate average
    const average =
      data.reduce((accumulator, value) => accumulator + value.value, 0) /
      data.length;

    averages.find({}).toArray((err) => {
      if (err) throw err;

      averages.insertOne({ value: average }, (err) => {
        if (err) throw err;
        console.log("Stored average in database.");
        client.close();
      });
    });
  });
});
