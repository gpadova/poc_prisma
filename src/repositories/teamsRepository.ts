import { Team } from "../type/teamType.js";
import { QueryResult } from "pg";

import prisma from "../database/db.js";

export async function insertTeamsQuery(team: Team) {
    return  prisma.teams.create({
        data: team
    })
}

export async function getTeamsQuery(){
    return prisma.teams.findMany()
}

export async function deleteTeamsQuery(teamId: string){
    return prisma.teams.delete({
        where : {
            "id": Number(teamId)
        }
    })
}