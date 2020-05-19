
var fs = require('fs');

fs.open('mytext.txt', 'r+', function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log('file opened successfully');
    }
})