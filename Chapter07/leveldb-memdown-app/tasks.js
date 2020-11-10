const levelup = require("levelup");
const memdown = require("memdown");

const db = levelup(memdown("./data"));

const task = process.argv[2];

if (!task) {
  listTasks();
} else {
  addTask();
}

function addTask() {
  const key = `Task: ${Math.random().toString(32).replace(".", "")}`;
  db.put(key, task, (err) => {
    if (err) throw err;
    listTasks();
  });
}

function listTasks() {
  db.createReadStream().on("data", (data) => {
    console.log(data.key.toString(), "=", data.value.toString());
  });
}
