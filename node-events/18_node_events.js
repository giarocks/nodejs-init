var fs = require('fs');
var rs = fs.ReadStream('../mynewfile1.txt');

//Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:


rs.on('open',function(){
    console.log('File is Open');
})