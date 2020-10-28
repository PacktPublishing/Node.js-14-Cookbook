const fs = require("fs");

const rs = fs.createReadStream("./file.txt");

rs.on("readable", () => {
  // Read data
  let data = rs.read();
  while (data !== null) {
    console.log("Read chunk:", data);
    data = rs.read();
  }
});

rs.on("end", () => {
  console.log("No more data.");
});
