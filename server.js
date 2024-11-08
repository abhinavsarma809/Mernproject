const express = require('express');
const app = express();
const env= require('dotenv');
env.config();
const Port = process.env.Port||3000;

app.listen(Port,()=>{
    console.log(`server is running in${Port}`);

});

app.get("/",(req,res)=>{
    res.send("hi hello world");
})
