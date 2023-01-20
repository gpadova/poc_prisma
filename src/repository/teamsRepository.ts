import { Team } from "../type/teamType";
import connectionDB from "../database/db";

export async function insertTeamsQuery(team: Team) {
    return connectionDB.query(`
        INSERT INTO teams(name, city, stadium)
        VALUES ($1, $2, $3);
    `, [team.name, team.city, team.stadium])
}

export async function getTeamsQuery() {
    return connectionDB.query(`
        SELECT * FROM teams;
    `)
}

export async function deleteTeamsQuery(teamId: string) {
    return connectionDB.query(`
        DELETE FROM teams WHERE id = $1
    `, [teamId])
}