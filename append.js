var fs = require('fs');

fs.appendFile('mynote.txt', '\n This is the second line and newly added', function(err){
    if(err){
        console.error(err);
    }else{
        console.log('Added new line');
    }
})