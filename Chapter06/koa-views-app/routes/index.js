const router = require("@koa/router")();

router.get("/", async function (ctx, next) {
  ctx.state = {
    title: "Koa.js",
  };
  await ctx.render("index");
});

module.exports = router;
