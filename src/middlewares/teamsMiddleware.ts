import { NextFunction, Request, Response } from "express";
import { teamsSchema } from "../schemas/teamsSchema.js";
import { Team } from "../type/teamType.js";
import connectionDB from "../database/db.js";

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
    
    const idExists = await connectionDB.query(`
        SELECT * FROM teams WHERE id = $1;
    `, [id])
    if(idExists.rowCount === 0){
        res.sendStatus(404)
    }
    next()
}