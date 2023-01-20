import { Match } from "../type/matchType";
import connectionDB from "../database/db";

export async function insertMatchesQuery(match: Match) {
    return connectionDB.query(`
        INSERT INTO matches("homeTeamId", "awayTeamId", date, awayGoals, homeGoals)
        VALUES ($1, $2, $3, $4, $5);
    `, [match.homeTeamId, match.awayTeamId, match.date, match.awayGoals, match.homeGoals])
}

export async function getMatchesQuery() {
    return connectionDB.query(`
        SELECT * FROM matches;
    `)
}

export async function deleteMatchQuery(id: string) {
    return connectionDB.query(`
    DELETE FROM matches
    WHERE id = $1
    `, [id])
}

export async function homeGoalQuery(id: string, status: boolean) {
    const numberOfGoals = await connectionDB.query(`
        SELECT "homeTeamGoals"
        FROM matches
        WHERE id = $1
    `, [id])
    if(status){
    return await connectionDB.query(`
            UPDATE matches
            SET "homeTeamGoals" = $1
            WHERE id = $2
        `, [numberOfGoals.rows[0].homeTeamGoals + 1, id])}
    else{
        return await connectionDB.query(`
            UPDATE matches
            SET "homeTeamGoals" = $1
            WHERE id = $2
        `, [numberOfGoals.rows[0].homeTeamGoals - 1, id])
        }
}

export async function awayGoalQuery(id: string, status: boolean) {
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