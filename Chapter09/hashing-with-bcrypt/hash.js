const password = process.argv[2];
const bcrypt = require("bcrypt");
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  console.log(hash);
});
