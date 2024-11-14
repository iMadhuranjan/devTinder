const express = require("express");

const app=express();

app.listen(7777, ()=>{
    console.log("Server is Started at 7777");
});


app.use("/home", (req, res)=>{
    res.send("THis is Home");
})


app.use("/", (req, res)=>{
    res.send("THis is Working");
});

