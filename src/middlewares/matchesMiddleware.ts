import { NextFunction, Request, Response } from "express";
import { string } from "joi";
import connectionDB from "../database/db";
import { matchSchema } from "../schemas/matchSchema";
import { Match, HomeGoal, AwayGoal } from "../type/matchType";

export async function matchBodyValidation(req:Request, res : Response, next : NextFunction) {
    const match = req.body as Match

    const  {error} = matchSchema.validate(match, {abortEarly: false})

    if(error){
        return res.status(400).send({
            message : error.message
        })
    }
    res.locals.match = match
    next()
}

export async function homeGoalValidation(req:Request, res : Response, next : NextFunction) {
    const goal = req.body as HomeGoal

    const  {error} = matchSchema.validate(goal, {abortEarly: false})

    if(error){
        return res.status(400).send({
            message : error.message
        })
    }
    res.locals.goal = goal
    next()
}

export async function awayGoalValidation(req:Request, res : Response, next : NextFunction) {
    const goal = req.body as AwayGoal
    const  {error} = matchSchema.validate(goal, {abortEarly: false})

    if(error){
        return res.status(400).send({
            message : error.message
        })
    }
    res.locals.goal = goal
    next()
}

export async function verifyIdInMatchesDb(req:Request, res : Response, next : NextFunction) {
    const id: string = req.params.id
    
    const idExists = await connectionDB.query(`
        SELECT * FROM matches WHERE id = $1;
    `, [id])
    if(idExists.rowCount === 0){
        res.sendStatus(404)
    }
    next()
}