const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, "text/html");
  fs.createReadStream(__dirname + "/index.html").pipe(res);
});
server.listen(3000);
