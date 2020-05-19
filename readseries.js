const fs = require('fs');

fs.readFile('mydata.json' , (err,data) =>{
    if(err)  throw err;
    out = JSON.parse(data);
    console.log(out.name);
    

})