import {Request, Response} from 'express';

export const home = (request: Request, response: Response) => {
    response.send("I am using typescript - Hi Kraken - <b>Mr. PotatoHead MR POTATOHEAD</b>")}

export const punList = (request: Request, response: Response) => {
    //add query
    
// db.any()
//     .then((data) => {
//         console.log('DATA', data.value)
        
//     })
//     .catch((error) => {
//         console.error('CAUGHT ERROR', error)
//     }) 
    console.log('punList - testing punList');
}
