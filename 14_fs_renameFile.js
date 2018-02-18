var fs = require('fs');

fs.rename('testFiletoRename.txt','newFileRenamed.txt', function(err){
    if(err) throw err;
    console.log('file renamed');
})

