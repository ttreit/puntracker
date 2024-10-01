import express from "express";
import {Request, Response} from "express";

const app = express();
const port:number = 7171;

app.get("/", (request: Request, response: Response) => {
    response.send("I am using typescript - Hi Kraken - <b>Mr. PotatoHead MR POTATOHEAD</b>");
})

app.listen(port, () => console.log(`App lisening on ${port}`));
