require("dotenv").config();
const pg = require("pg");
const db = new pg.Client();
const task = process.argv[2];

const CREATE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS task_docs
                          (id SERIAL, doc jsonb);`;
const INSERT_TASK_SQL = `INSERT INTO task_docs (doc) VALUES ($1);`;
const GET_TASKS_SQL = `SELECT * FROM task_docs;`;

db.connect((err) => {
  if (err) throw err;
  db.query(CREATE_TABLE_SQL, (err) => {
    if (err) throw err;
    if (task) {
      db.query(INSERT_TASK_SQL, [task], (err) => {
        if (err) throw err;
        listTasks();
      });
    } else {
      listTasks();
    }
  });
});

function listTasks() {
  db.query(GET_TASKS_SQL, (err, results) => {
    if (err) throw err;
    console.log(results.rows);
    db.end();
  });
}
