var fs = require('fs');

fs.open('mynewfile2Open.txt','w', function(err,file){
    if(err) throw err;
    console.log('Saved');
})