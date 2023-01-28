import { Match } from "../type/matchType.js";
import { QueryResult } from "pg";
import prisma from "../database/db.js";

export async function insertMatchesQuery(match: Match){
    return prisma.matches.create({
        data: {
            "homeTeamId": Number(match.homeTeamId),
            "awayTeamId": Number(match.awayTeamId),
            "date": new Date(),
            "homeGoals": 0,
            "awayGoals": 0
        }
    })
}

export async function getMatchesQuery(){
    return prisma.matches.findMany()
}

export async function deleteMatchQuery(id: string){
    return prisma.matches.delete({
        where: {
            id: Number(id)
        }
    })
}

export async function homeGoalQuery(id: string, status: boolean){
    const numberOfGoalsFull = 
        await prisma.matches.findFirst({
            where: {
                "id": Number(id)
            }
        })
    const numberOfGoals = numberOfGoalsFull.homeGoals
    if(status){
        return prisma.matches.update({
            where: {
                "id": Number(id)
            }, data: {
                "homeGoals": numberOfGoals + 1
            }  
        })}
    else{
        return prisma.matches.update({
            where: {
                "id": Number(id)
            }, data: {
                "homeGoals": numberOfGoals - 1
            }  
        })}
}

export async function awayGoalQuery(id: string, status: boolean){
    const numberOfGoalsFull = 
        await prisma.matches.findFirst({
            where: {
                "id": Number(id)
            }
        })
    const numberOfGoals = numberOfGoalsFull.awayGoals
    if(status){
        return prisma.matches.update({
            where: {
                "id": Number(id)
            }, data: {
                "awayGoals": numberOfGoals + 1
            }  
        })}
    else{
        return prisma.matches.update({
            where: {
                "id": Number(id)
            }, data: {
                "awayGoals": numberOfGoals - 1
            }  
        })}
}