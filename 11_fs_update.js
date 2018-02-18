
var fs = require('fs');

fs.appendFile('mynewfile1.txt','This is the updated addedd text',function(err){
    if(err) throw err;
    console.log('Updated the file !')
})