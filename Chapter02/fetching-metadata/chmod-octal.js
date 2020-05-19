const fs = require("fs");
const file = "./file.txt";

fs.chmodSync(file, 0o664);
