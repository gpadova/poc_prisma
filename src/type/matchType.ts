export type Match = {
    homeTeamId: number,
    awayTeamId: number,
    date: Date,
    homeGoals?: number,
    awayGoals?: number    
}

export type HomeGoal = {
    homeGoal: boolean
}

export type AwayGoal = {
    awayGoal: boolean
}