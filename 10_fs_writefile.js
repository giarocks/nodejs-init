//The fs.writeFile() method replaces the specified file and content if it exists

var fs = require('fs');
fs.writeFile('mynewfile3WriteFile.txt', 'Write File content ', function(err){
    if(err) throw err;
    console.log('Saved!');
})