import prisma from "../src/database/db.js";

async function main(){
    await prisma.teams.createMany({
        data:[{"name": "Santos", "city": "Santos", "stadium": "Vila Belmiro"},
            {"name": "Flamengo", "city": "Rio de Janeiro", "stadium": "Gavea"},
            {"name": "Botafogo", "city": "Rio de Janeiro", "stadium": "Engenhao"}]
    })
    
    await prisma.players.createMany({
        data:
        [{"name": "Pelé", "age": 80, "teamId": 1 },
        {"name": "Zico", "age": 65, "teamId": 2},
        {"name": "Garrincha", "age": 90, "teamId": 3}]
    })

    await prisma.matches.create({
        data: {"homeTeamId": 1, "awayTeamId": 2, "date": new Date(), "homeGoals": 0, "awayGoals": 0}
    })
}


main()
    .then(() => console.log("Deu Bom"))
    .catch((e) => {
        console.log(e)
        process.exit(1)
    })
    .finally(async () => await prisma.$disconnect())