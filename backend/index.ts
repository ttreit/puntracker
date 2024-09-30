import express from "express";
import {Request, Response} from "express";

const app = express();
const port:number = 7171;

app.get("/", (request: Request, response: Response)=>{
    response.send("I am using typescript - HELLO WORLD - Mr. PotatoHead MR POTATOHEAD")
})

app.get("/nephew-is-awesome", (request: Request, response: Response)=>{
  response.json({nephew: "Andreas",
                isAwesome: true,
                isSuperAwesome: true,
  })
})

app.listen(port, ()=>console.log(`App lisening on ${port}`) );