const fs = require('fs');
const file = './file.txt';

fs.watchFile(file, (current, previous) => {
    return console.log(`${file} updated ${time}`)
});