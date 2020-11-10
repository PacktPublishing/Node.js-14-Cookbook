const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method !== "GET") return error(res, 405);
  if (req.url === "/todo") return todo(res);
  if (req.url === "/") return index(res);
  error(res, 404);
});

function error(res, code) {
  res.statusCode = code;
  res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}

function todo(res) {
  res.end('[{"task_id": 1, "description": "walk dog"}]}');
}

function index(res) {
  res.end('{"name": "todo-server"}');
}

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
