var http = require('http'); //HTTP is a uilt in module
var dt = require('./myfirstmodule');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('the date and time is set to'+ dt.myDateTime());
    res.write('OR the date and time is currently set to'+ function(){
         var date = new Date();return date;
        });

    res.end();
}).listen(8080);

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// }).listen(8080);