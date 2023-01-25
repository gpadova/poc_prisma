import { Team } from "../type/teamType.js";
import { QueryResult } from "pg";
import connectionDB from "../database/db.js";

export async function insertTeamsQuery(team: Team): Promise<QueryResult> {
    return await connectionDB.query(`
        INSERT INTO teams(name, city, stadium)
        VALUES ($1, $2, $3);
    `, [team.name, team.city, team.stadium])
}

export async function getTeamsQuery(): Promise<QueryResult<Team>>{
    return connectionDB.query(`
        SELECT * FROM teams;
    `)
}

export async function deleteTeamsQuery(teamId: string): Promise<QueryResult> {
    return connectionDB.query(`
        DELETE FROM teams WHERE id = $1
    `, [teamId])
}