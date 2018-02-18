var uc = require('upper-case');
var http = require('http');

http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-type':'text/html'});
    resp.write(uc("Hello World"));
    resp.end();
}).listen(8080);