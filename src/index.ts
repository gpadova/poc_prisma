import express from "express"
import teamsRouter from "./routes/teamsRoute.js"
import matchesRouter from "./routes/matchesRoute.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(teamsRouter)
app.use(matchesRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`App is running is PORT ${PORT}`))