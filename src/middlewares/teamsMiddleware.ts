import { NextFunction, Request, Response } from "express";
import { teamsSchema } from "../schemas/teamsSchema.js";
import { Team } from "../type/teamType.js";
import prisma from "../database/db.js";

export async function teamsBodyValidation(req:Request, res : Response, next : NextFunction) {
    const team = req.body as Team

    const  {error} = teamsSchema.validate(team, {abortEarly: false})

    if(error){
        return res.status(404).send({
            message : error.message
        })
    }
    res.locals.team = team
    next()
}

export async function validateIdInTeamsDb(req:Request, res : Response, next : NextFunction) {
    const id: string = req.params.id
    
    const idExists = await prisma.teams.findFirst({
        where: {
            "id": Number(id)
        }
    })
    if(idExists === null){
        return res.sendStatus(404)
    }
    next()
}