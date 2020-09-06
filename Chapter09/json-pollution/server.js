const http = require("http");
const { STATUS_CODES } = http;

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    greeting(req, res);
    return;
  }

  res.statusCode = 404;
  res.end(STATUS_CODES[res.statusCode]);
});

greeting = (req, res) => {
  let data = "";
  req.on("data", (chunk) => (data += chunk));
  req.on("end", () => {
    try {
      data = JSON.parse(data);
    } catch (e) {
      res.end('{"msg": ""}');
      return;
    }

    if (data.hasOwnProperty("name")) {
      res.end(`${data.msg} ${data.name}`);
    } else {
      res.end(data.msg);
    }
  });
};

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
