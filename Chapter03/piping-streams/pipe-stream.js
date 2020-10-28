const fs = require("fs");

const rs = fs.createReadStream("file.txt");

rs.pipe(process.stdout);
