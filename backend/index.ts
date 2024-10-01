import express from "express";
import {Request, Response} from "express";
import pgp from "pg-promise";
import {home, punList} from "./routefunctions";

const pgpClient = pgp();
const db = pgpClient('postgres://postgres:postgres@localhost:5432/puntracker');

const app = express();
const port:number = 7171;

app.get("/", home);

app.listen(port, async () => {
    try {
        console.log(`App lisening on ${port}`);
        console.log('Connecting to Database...');
        await db.connect();
        console.log('Connected...maybe');
    }
    catch(listeningErrors){console.log('Found an Error: ', listeningErrors)};

});
