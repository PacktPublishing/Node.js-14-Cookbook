const fs = require("fs");
const file = process.argv[2];

function printMetadata(file) {
  try {
    const fileStats = fs.statSync(file);
    console.log(fileStats);
  } catch (err) {
    console.error("Error reading file path:", file);
  }
}

printMetadata(file);
