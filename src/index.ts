import express from "express"
import teamsRouter from "./routes/teamsRoute"
import matchesRouter from "./routes/matchesRoute"
import cors from "cors"

const app = express()

app.use(cors())
app.use(teamsRouter)
app.use(matchesRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`App is running is PORT ${PORT}`))