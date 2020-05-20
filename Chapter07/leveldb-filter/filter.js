const levelup = require("levelup");
const leveldown = require("leveldown");
const db = levelup(leveldown("./data"));

db.put("Task:1", "");
db.put("Task:2", "");
db.put("Task:3", "");
db.put("Task:4", "");

db.createReadStream({
  gte: "Task:1",
  lte: "Task:3",
}).on("data", function (data) {
  console.log(data.key.toString());
});

db.batch()
  .put("forename", "Beth")
  .put("surname", "Griggs")
  .del("forename")
  .write(() => console.log("Batch operations complete."));
