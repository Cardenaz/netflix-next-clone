import { StatusCodes } from "http-status-codes";
import { createUser } from "./user.service";
import {Request, Response} from 'express'
import { RegisterUserBody } from "./user.schema";

export async function registerUserHandler(req: Request<{}, {}, RegisterUserBody>, res:Response){

    const {username, email, password} = req.body; 

    try {

        await createUser({username, email, password}); 

        return res.status(StatusCodes.CREATED).send('user created successfully'); 

    } catch (error) {

      /*  if(e.code === 11000) {
            return res.status(StatusCodes.CONFLICT).send("User "); 
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message); */
        
    }

}