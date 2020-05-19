const fs = require('fs');
const express = require('express');
const app = express();

const port= 6500;

//default router
app.get('/a', (req,resp)=>{
    resp.send("<h1> Welcome to our webpage </h1>");
})

//webservice endpoint ----  JSON 
app.get('/getdata', (req, resp) =>{
    fs.readFile('./mydata.json', (err,result)=>{
        if(err){
        throw err;
        }else{
            resp.send(JSON.parse(result));
        }
    })
})
app.listen(port,(err) => {
    if(err) throw err;
    console.log('server is running on :' + port);
});