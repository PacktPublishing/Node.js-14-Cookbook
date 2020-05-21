const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const title = "Express";
  res.send(`
       <html>
         <head>
           <title> ${title} </title>
<link rel="stylesheet" href="styles.css"> </head>
         <body>
           <h1> ${title} </h1>
           <p> Welcome to ${title} </p>
         </body>
       </html>
`);
});

module.exports = router;
