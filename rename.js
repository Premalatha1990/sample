var fs = require('fs');

fs.rename('sample.txt', 'mynote.txt', function(err){
    if(err){
        console.log(err);
    }else{
        console.log('file has been renamed');
    }
})