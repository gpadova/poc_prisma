import { Router } from "express";
import { matchBodyValidation, verifyIdInMatchesDb } from "../middlewares/matchesMiddleware";
import { insertMatch, getMatches, deleteMatch } from "../controllers/matchController";

const matchesRouter = Router()

matchesRouter.post("/match", matchBodyValidation, insertMatch)
matchesRouter.get("/match", getMatches)
matchesRouter.use(verifyIdInMatchesDb)
matchesRouter.delete("/match/:id", deleteMatch)
matchesRouter.patch("/match/home/:id")
matchesRouter.patch("/match/away/:id")


export default matchesRouter