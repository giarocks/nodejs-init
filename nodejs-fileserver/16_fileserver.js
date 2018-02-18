/*
Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:
*/


var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req, resp) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log(q);
    console.log(filename);

    // Open the file

    fs.readFile(filename, function(err, data) {
      if (err) {
        resp.writeHead(404, { "Content-type": "text/html" });
        return resp.end("404 not found");
      }
      resp.writeHead(200, { "Content-type": "text/html" });
      resp.write(data);
      resp.end();
    });
  }).listen(8080);
