const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");

fs.readFile(filepath, "utf8", function (err, contents) {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();
  fs.writeFile(filepath, upperContents, function (err) {
    if (err) throw err;
    console.log("File updated.");
  });
});
