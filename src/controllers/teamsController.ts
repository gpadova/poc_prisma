import { Team } from "../type/teamType"
import { NextFunction, Request, Response } from "express";
import { insertTeamsQuery, getTeamsQuery, deleteTeamsQuery } from "../repository/teamsRepository";

export async function insertTeams(req:Request, res : Response) {
    const team: Team = res.locals.team
    
    try {
        await insertTeamsQuery(team)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export async function getTeams(req:Request, res : Response) {
    
    try {
        const teams = await getTeamsQuery()
        res.send(teams).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export async function deleteTeams(req:Request, res : Response) {
    const { id } = req.params
    try {
        await deleteTeamsQuery(id)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}