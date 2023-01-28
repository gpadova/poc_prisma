import { NextFunction, Response, Request } from "express";
import { playerSchema } from "../schemas/playerSchema.js";
import { Player } from "../type/playerType.js";
import prisma from "../database/db.js";

export async function verifyPlayerBody(req:Request, res : Response, next : NextFunction) {
    const player = req.body as Player

    const  {error} = playerSchema.validate(player, {abortEarly: false})

    if(error){
        return res.status(404).send({
            message : error.message
        })
    }

    next()
}

export async function verifyPlayerInDb(req:Request, res : Response, next : NextFunction) {
    const {id} = req.params 
    const playerExists = prisma.players.findUnique({
        where: {
            id: Number(id)
        }
    })
    if( playerExists === null){
        return res.sendStatus(409)
    }
    next()
}