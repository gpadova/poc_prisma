import { Router } from "express";
import { teamsBodyValidation, validateIdInTeamsDb } from "../middlewares/teamsMiddleware";
import { insertTeams, getTeams, deleteTeams } from "../controllers/teamsController";


const teamsRouter = Router()

teamsRouter.post("/teams", teamsBodyValidation, insertTeams)
teamsRouter.get("/teams", getTeams)
teamsRouter.delete("/teams/:id",validateIdInTeamsDb, deleteTeams)

export default teamsRouter