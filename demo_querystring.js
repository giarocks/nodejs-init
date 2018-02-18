var http = require('http');
var url = require('url');

http.createServer(function(req,resp){
resp.writeHead(200,{'Content-type':'text/html'});
var q = url.parse(req.url, true).query;
console.log(q)
var txt = q.year + " " + q.month;
resp.end(txt)
}).listen(8080);