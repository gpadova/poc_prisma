import { Match } from "../type/matchType"
import { HomeGoal, AwayGoal } from "../type/matchType.js";
import { NextFunction, Request, Response } from "express";
import { insertMatchesQuery, getMatchesQuery, deleteMatchQuery, homeGoalQuery, awayGoalQuery } from "../repositories/matchRepository.js";


export async function insertMatch(req:Request, res : Response) {
    const match = res.locals.match as Match
    
    try {
        await insertMatchesQuery(match)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export async function getMatches(req:Request, res : Response) {
    try {
        const matches = await getMatchesQuery()
        return res.send(matches).status(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(401)
    }
}

export async function deleteMatch(req:Request, res: Response) {
    const { id } = req.params 
    try {
        await deleteMatchQuery(id)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export async function updateHomeGoal(req:Request, res: Response) {
    const goalBool = req.body as HomeGoal
    const id : string = req.params.id

    try {
        await homeGoalQuery(id, goalBool.homeGoal)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(401)
    }
}

export async function updateAwayGoal(req:Request, res: Response) {
    const goalBool = req.body.homeTeamGoal as AwayGoal
    const id: string = res.locals.id 
    try {
        await awayGoalQuery( id, goalBool.awayGoal)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(401)
    }
}