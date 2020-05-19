const fs = require('fs');

const series = {
    titile: "sports",
    name: "Football"
 }

 const data= JSON.stringify(series);

 fs.writeFile('mydata.json', data, (err,data) =>{
     if(err){
         console.log(err)
     }
     console.log('success');
 })