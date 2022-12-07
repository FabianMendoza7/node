import express from "express"
import { consultar }  from "../controllers/servicioController.js"

const router = express.Router()

// Consulta de servicios.
router.get("/", consultar)

export default router