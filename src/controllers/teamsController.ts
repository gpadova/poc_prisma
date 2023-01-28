import { Team } from "../type/teamType.js"
import { NextFunction, Request, Response } from "express";
import { insertTeamsQuery, getTeamsQuery, deleteTeamsQuery } from "../repositories/teamsRepository.js";

export async function insertTeams(req:Request, res : Response) {
    const team = req.body as Team

    try {
        await insertTeamsQuery(team)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export async function getTeams(req:Request, res : Response) {
    
    try {
        const teams = await getTeamsQuery()
        return res.send(teams).status(202)
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export async function deleteTeams(req:Request, res : Response) {
    const { id } = req.params
    try {
        await deleteTeamsQuery(id)
        return res.sendStatus(202)
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}