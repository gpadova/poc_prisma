import { Router } from "express";
import { verifyPlayerBody, verifyPlayerInDb } from "../middlewares/playerMiddleware.js";
import { insertPlayer, getPlayers } from "../controllers/playersControllers.js";

const playersRoute = Router()

playersRoute.post("/players",verifyPlayerBody, insertPlayer )
playersRoute.get("/players", getPlayers)
playersRoute.delete("/players/:id",verifyPlayerInDb, deletePlayers)

export default playersRoute