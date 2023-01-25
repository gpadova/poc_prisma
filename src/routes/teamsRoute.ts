import { Router } from "express";
import { teamsBodyValidation, validateIdInTeamsDb } from "../middlewares/teamsMiddleware.js";
import { insertTeams, getTeams, deleteTeams } from "../controllers/teamsController.js";


const teamsRouter = Router()

teamsRouter.post("/teams", teamsBodyValidation, insertTeams)
teamsRouter.get("/teams", getTeams)
teamsRouter.delete("/teams/:id",validateIdInTeamsDb, deleteTeams)

export default teamsRouter