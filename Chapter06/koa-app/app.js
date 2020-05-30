const path = require("path");

const Koa = require("koa");
const serve = require("koa-static");
const router = require("@koa/router")();
const index = require("./routes/index");

const PORT = process.env.PORT || 3000;

const app = new Koa();

app.use(serve(path.join(__dirname, "public")));

router.use("/", index.routes());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
