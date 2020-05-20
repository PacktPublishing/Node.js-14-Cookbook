import express from "express";
import { name } from "./get-name/index.mjs";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => res.send(`Hello from ${name}!`));

app.listen(PORT, () => {
  console.log("Express server started on port", PORT);
});
