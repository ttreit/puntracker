import { Request, Response } from 'express';
import { db } from './index'

export const home = (request: Request, response: Response) => {
    response.send("I am using typescript - Hi Kraken - <b>Mr. PotatoHead MR POTATOHEAD</b>")
}

export const punListView = async (request: Request, response: Response) => {
    try {
        console.log('here')
        const res = await db.any('Select * from puns')
        console.log(res)
        response.json(res);
    } catch (error) {
        console.error(error)
    }

}


export const addPunView = async (request: Request, response: Response) => {
    const user = 2;
    // TODO: add query to insert pun into database
    const pun = request.body.pun;
    const res = await db.none('fINSERT INTO puns (user_fk, pun, created_date) VALUES ($1, $2, CURRENT_DATE)', [user, pun]);
    response.status(201).json({ message: 'Pun created successfully' });


}
