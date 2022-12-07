import express from "express"
import { consultar, crear }  from "../controllers/turnoController.js"

const router = express.Router()

// Consulta de turnos.
router.get("/", consultar)

// Creación de turnos.
router.post("/", crear)


export default router