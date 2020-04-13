'use strict'

const fs = require('fs');
const file = './file.txt';

fs.chmodSync("./file.txt", 0o664);