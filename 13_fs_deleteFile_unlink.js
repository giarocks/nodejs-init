var fs = require('fs');

fs.appendFile('testFileCreationToDelete.txt','textadded to temp file', function(err){
    if(err) throw err;
    console.log('file created');
})

fs.unlink('testFileCreationToDelete.txt',function(err){
    if (err) throw err;
    console.log('file deleted');
})