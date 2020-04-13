const fs = require('fs');
const path = require('path');

const filepath = path.join(process.cwd(), 'hello.txt');

let contents = fs.readFileSync(filepath, 'utf8');
console.log("File Contents:", contents);

contents = contents.toString().toUpperCase();

fs.writeFileSync(filepath, contents);
console.log("File updated.");
