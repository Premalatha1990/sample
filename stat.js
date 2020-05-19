var fs = require('fs');

fs.stat('mytext.txt', function(err,stats){
    if(err){
        console.log(err);
    }else{
        console.log(stats);
        console.log('got file info..');
    }
})