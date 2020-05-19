var fs = require('fs');

fs.unlink('mytext.txt', function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log('file deleted');
    }
})