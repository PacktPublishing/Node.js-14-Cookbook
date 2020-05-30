const express = require("express");
const path = require("path");
const index = require("./routes/index");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/", index);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
