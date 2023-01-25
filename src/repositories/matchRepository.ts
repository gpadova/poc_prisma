import { Match } from "../type/matchType.js";
import { QueryResult } from "pg";
import connectionDB from "../database/db.js";

export async function insertMatchesQuery(match: Match): Promise<QueryResult> {
    return connectionDB.query(`
        INSERT INTO matches("homeTeamId", "awayTeamId", date)
        VALUES ($1, $2, $3);
    `, [match.homeTeamId, match.awayTeamId, match.date])
}

export async function getMatchesQuery():Promise<QueryResult<Match>> {
    return connectionDB.query(`
        SELECT * FROM matches;
    `)
}

export async function deleteMatchQuery(id: string): Promise<QueryResult> {
    return connectionDB.query(`
    DELETE FROM matches
    WHERE id = $1
    `, [id])
}

export async function homeGoalQuery(id: string, status: boolean): Promise<QueryResult> {
    const numberOfGoalsFull = await connectionDB.query(`
        SELECT "homeGoals"
        FROM matches
        WHERE id = $1
    `, [id])
    const numberOfGoals = numberOfGoalsFull.rows[0].homeGoals
    if(status){
    return connectionDB.query(`
            UPDATE matches
            SET "homeGoals" = $1
            WHERE id = $2
        `, [numberOfGoals + 1, id])}
    else{
        return connectionDB.query(`
            UPDATE matches
            SET "homeGoals" = $1
            WHERE id = $2
        `, [numberOfGoals - 1, id])
        }
}

export async function awayGoalQuery(id: string, status: boolean): Promise<QueryResult> {
    const numberOfGoals = await connectionDB.query(`
        SELECT "awayTeamGoals"
        FROM matches
        WHERE id = $1
    `, [id])
    if(status){
    return await connectionDB.query(`
            UPDATE matches
            SET "awayTeamGoals" = $1
            WHERE id = $2
        `, [numberOfGoals.rows[0].awayTeamGoals + 1, id])}
    else{
        return await connectionDB.query(`
            UPDATE matches
            SET "homeTeamGoals" = $1
            WHERE id = $2
        `, [numberOfGoals.rows[0].awayTeamGoals - 1, id])
        }
}