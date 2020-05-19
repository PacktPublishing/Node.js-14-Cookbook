const fs = require("fs");
const file = "./file.txt";
const moment = require("moment");

fs.watch(file, (eventType, filename) => {
  const time = moment().format("MMMM Do YYYY, h:mm:ss a");
  return console.log(`${filename} updated ${time}`);
});
