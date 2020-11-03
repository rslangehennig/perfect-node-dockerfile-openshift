http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello! I have been deployed by Fadin -- v8");
    res.end();
  })
  .listen(8080);
