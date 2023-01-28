import { NextFunction, Request, Response } from "express";
import { string } from "joi";
import prisma from "../database/db.js";
import { matchSchema } from "../schemas/matchSchema.js";
import { Match, HomeGoal, AwayGoal } from "../type/matchType.js";

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
    
    const idExists = await prisma.matches.findFirst({
        where: {
            "id": Number(id)
        }
    })
    if(idExists === null){
        return res.sendStatus(404)
    }
    next()
}