var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);//part of the url that comes after the domain name
    res.end();
}).listen(8080);

//RESP - 
/*
/
/summer
*/