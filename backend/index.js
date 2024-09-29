const express = require("express");
const app = express();
const port = 7171;

app.get("/", (request, response)=>{
    response.send("Hello World")
})

app.listen(port, ()=>console.log(`App lisening on ${port}`) );