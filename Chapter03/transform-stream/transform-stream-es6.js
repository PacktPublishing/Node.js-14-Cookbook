const fs = require("fs");
const { Transform } = require("stream");

const rs = fs.createReadStream("./file.txt");
const newFile = fs.createWriteStream("./newFile.txt");

class Uppercase extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

rs.pipe(new Uppercase()).pipe(newFile);
