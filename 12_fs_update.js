
var fs = require('fs');

fs.writeFile('mynewfile3WriteFile.txt','This is the new write file content',function(err){
    if(err) throw err;
    console.log('Replaced !')
})