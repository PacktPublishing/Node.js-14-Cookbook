const router = require("@koa/router")();

router.get("/", async function (ctx) {
    const title = "Koa.js";
    ctx.body = `
       <html>
         <head>
           <title> ${title} </title>
           <link rel="stylesheet" href="styles.css"> </head>
         <body>
           <h1> ${title} </h1>
           <p> Welcome to ${title} </p>
         </body>
       </html>
`;
});

module.exports = router;