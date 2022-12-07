import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import turnoRoutes from "./routes/turnoRoutes.js"
import servicioRoutes from "./routes/servicioRoutes.js"

const app = express()
const PORT = process.env.SERVER_PORT || 4000

app.use(express.json())

dotenv.config()

// Configurar CORS.
const whiteList = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function(origin, callback) {
        if (whiteList.includes(origin)) {
            // Puede consultar la api.
            callback(null, true)
            
        } else {
            // No está permitido su request.
            callback(new Error(`CORS no permite la solicitud ${origin}`))
        }
    },
}

app.use(cors(corsOptions))

// Routing.
app.use("/api/turnos", turnoRoutes);
app.use("/api/servicios", servicioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})