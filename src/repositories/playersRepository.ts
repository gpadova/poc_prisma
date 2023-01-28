import { Player } from "../type/playerType.js";
import prisma from "../database/db.js";

export async function inserPlayersQuery(player:Player) {
    return prisma.players.create({
        data: player
    })
}

export async function getPlayersQuery() {
    return prisma.players.findMany()
}

export async function deletePlayersQuery(id:string) {
    return prisma.players.delete({
        where:
        {
            id: Number(id)
        }
    })
}