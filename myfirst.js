var http = require('http');//HTTP is a uilt in module

//create a server object:

http.createServer(function(req, resp){
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.end('Hello World!');
}).listen('8080');

