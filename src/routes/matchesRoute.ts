import { Router } from "express";
import { matchBodyValidation, verifyIdInMatchesDb } from "../middlewares/matchesMiddleware.js";
import { insertMatch, getMatches, deleteMatch, updateHomeGoal, updateAwayGoal } from "../controllers/matchController.js";

const matchesRouter = Router()

matchesRouter.post("/match", matchBodyValidation, insertMatch)
matchesRouter.get("/match", getMatches)
matchesRouter.delete("/match/:id", verifyIdInMatchesDb,deleteMatch)
matchesRouter.patch("/match/home/:id",verifyIdInMatchesDb, updateHomeGoal)
matchesRouter.patch("/match/away/:id",verifyIdInMatchesDb, updateAwayGoal)


export default matchesRouter