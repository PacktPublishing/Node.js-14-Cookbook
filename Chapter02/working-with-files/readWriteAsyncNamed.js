const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");

fs.readFile(filepath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);

  const upperContents = contents.toUpperCase();
  updateFile(filepath, upperContents);
});

function updateFile(filepath, contents) {
  fs.writeFile(filepath, contents, function (err) {
    if (err) throw err;
    console.log("File updated.");
  });
}
