const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log("First middleware start")
    await next();
    console.log("First middleware return")
});

app.use(async (ctx, next) => {
    console.log("Second middleware start")
    await next();
    console.log("Second middleware return")

});

app.use(async ctx => {
    console.log("Third middleware start");
    console.log("Third middleware return");
});

app.listen(3000);