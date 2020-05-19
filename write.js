var fs = require('fs');

fs.writeFile('sample.txt', 'This is the sample data', function(err){
    if(err){
        console.log(err);
    }else{
        console.log('file created');
    }
})