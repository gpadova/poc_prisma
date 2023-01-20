import { Match } from "../type/matchType"
import { HomeGoal } from "../type/matchType";
import { NextFunction, Request, Response } from "express";
import { insertMatchesQuery, getMatchesQuery, deleteMatchQuery, homeGoalQuery, awayGoalQuery } from "../repository/matchRepository";


export async function insertMatch(req:Request, res : Response) {
    const match: Match = res.locals.match
    
    try {
        await insertMatchesQuery(match)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export async function getMatches(req:Request, res : Response) {
    try {
        const matches = await getMatchesQuery()
        res.send(matches).status(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}

export async function deleteMatch(req:Request, res: Response) {
    const { id } = req.params 
    try {
        await deleteMatchQuery(id)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export async function updateHomeGoal(req:Request, res: Response) {
    const goalBool = req.body.homeTeamGoal as boolean
    const id: string = res.locals.id 
    try {
        await homeGoalQuery( id, goalBool)
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}

export async function updateAwayGoal(req:Request, res: Response) {
    const goalBool = req.body.homeTeamGoal as boolean
    const id: string = res.locals.id 
    try {
        await awayGoalQuery( id, goalBool)
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}