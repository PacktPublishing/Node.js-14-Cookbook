require("http")
  .createServer((req, res) => {
    console.log(
      req.connection.remoteAddress,
      Buffer.from(req.url.split("/attack/")[1], "base64").toString().trim()
    );
  })
  .listen(3001, () => {
    console.log("Collection Server listening on port 3001");
  });
