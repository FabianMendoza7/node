import express from "express"
import dotenv from "dotenv"
import turnoRoutes from "./routes/turnoRoutes.js"

const app = express()
app.use(express.json())

dotenv.config()
const PORT = process.env.SERVER_PORT || 4000

// Routing.
app.use("/api/turnos", turnoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})