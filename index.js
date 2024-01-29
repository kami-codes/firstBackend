require('dotenv').config()
const express = require("express");
const app = express()

app.get("/", (req,res)=>{
    res.send("this is my chai aur code thing")
})

app.listen(process.env.PORT, ()=>{
    console.log("server is running in good position")
})