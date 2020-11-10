const http = require("http");
const path = require("path");

//process.report.directory = path.join(__dirname, "reports");
process.report.filename = "my-diagnostic-report.json";

http.get("hello://localhost:3000", (response) => {});