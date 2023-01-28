import prisma from "../database/db.js"
import { Request, Response } from "express";
import { inserPlayersQuery, getPlayersQuery, deletePlayersQuery } from "../repositories/playersRepository.js"

export async function insertPlayer(req:Request, res : Response) {
    const player = req.body
    try {
        await inserPlayersQuery(player)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(401)
    }
}

export async function getPlayers(req:Request, res : Response) {
    try {
        const players = await getPlayersQuery()
        return res.send(players).status(200)
    } catch (error) {
        console.log(error)
        return res.sendStatus(404)
    }
}

export async function deletePlayers(req:Request, res : Response) {
    const {id} = req.params
    try {
        await deletePlayersQuery(id)
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}