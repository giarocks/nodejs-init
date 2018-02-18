var http = require('http');

//create a server object:
http.createServer(function(req, resp){

/*    If the response from the HTTP server is supposed to be displayed as HTML, 
you should include an HTTP header with the correct content type
*/
// 200 - Status Code - all
    res.writeHead(200, {'Content-type':'text/html'})
    resp.write('Hello World!'); //write a response to the client

    resp.end(); //end the response
}).listen(8080); //the server object listens on port 8080

