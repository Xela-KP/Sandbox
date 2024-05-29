const http = require("node:http");
const fs = require("node:fs");
const { clear } = require("node:console");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(__dirname + "/index.html").pipe(res);
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(__dirname + "/about.html").pipe(res);
      break;
    case "/api":
      res.writeHead(200, { "Content-Type": "application/api" });
      res.end(JSON.stringify(require("./data.json")));
      break;
    default:
      break;
  }
});
server.listen(3000);
