const password = process.argv[2];
const hash = process.argv[3];
const bcrypt = require("bcrypt");

bcrypt
  .compare(password, hash)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err.message));
