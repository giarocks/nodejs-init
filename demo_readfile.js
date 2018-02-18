var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp){
fs.readFile('demofile1.html',function(err, data){
    resp.writeHead(200,{'Content-type':'text/html'});
    resp.write(data)
    resp.end();
});
}).listen(8080);