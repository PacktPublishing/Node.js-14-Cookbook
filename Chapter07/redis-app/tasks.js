const redis = require("redis");
const client = redis.createClient();
const task = process.argv[2];

client.on("error", (err) => {
  console.log("Error:", err);
});

if (!task) {
  listTasks();
} else {
  addTask(task);
}

function addTask(task) {
  const key = `Task: ${Math.random().toString(32).replace(".", "")}`;
  client.hmset(key, {
    task,
  });
  listTasks();
}

function listTasks() {
  client.keys("Task:*", (err, keys) => {
    if (err) throw err;
    keys.forEach((key) => {
      client.hgetall(key, (err, task) => {
        if (err) throw err;
        console.log(task);
      });
    });
    client.quit();
  });
}
