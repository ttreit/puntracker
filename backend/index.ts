import express from "express";
import { Request, Response } from "express";
import pgp from "pg-promise";
import cors from "cors";
import { home, punListView, addPunView } from "./routefunctions";

const pgpClient = pgp();
const app = express();
const port: number = 7171;
export const db = pgpClient('postgres://postgres:postgres@localhost:5432/puntracker');

// Configure CORS to allow requests from localhost:5500
const corsOptions = {
    origin: 'http://localhost:5500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// Configure Express to parse JSON from request body
app.use(express.json());


// Configure Routes
app.get("/", home);
app.get("/puns", punListView);
app.post("/puns", addPunView);

// Start App
app.listen(port, async () => {
    try {
        console.log(`App lisening on ${port}`);
        console.log('Connecting to Database...');
        await db.connect();
        console.log('Connected!!!');
    }
    catch (listeningErrors) { console.log('Found an Error: ', listeningErrors) };

});
