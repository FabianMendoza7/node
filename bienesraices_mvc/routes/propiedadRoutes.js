import express from "express"
import { body } from 'express-validator'
import {admin, crear, guardar, agregarImagen, almacenarImagen} from '../controllers/propiedadController.js'
import protegerRuta from "../middleware/protegerRuta.js"
import upload from "../middleware/subirImagen.js"

const router = express.Router()

router.get('/mis-propiedades', protegerRuta, admin)
router.get('/propiedades/crear', protegerRuta, crear)
router.post('/propiedades/crear', 
    protegerRuta,
    body('titulo').notEmpty().withMessage('El título del anuncio es obligatorio'),
    body('descripcion')
        .notEmpty().withMessage('La descripción del anuncio es obligatoria')
        .isLength({ max: 200 }).withMessage('La descripción es muy larga'),
    body('categoria').isNumeric().withMessage('Selecciona una categoría'),
    body('precio').isNumeric().withMessage('Selecciona un rango de precios'),
    body('habitaciones').isNumeric().withMessage('Selecciona la cantidad de habitaciones'),
    body('estacionamiento').isNumeric().withMessage('Selecciona un rango de estacionamientos'),
    body('wc').isNumeric().withMessage('Selecciona la cantidad de baños'),
    body('lat').isNumeric().withMessage('Ubica la propiedad en el mapa'),
    guardar
)

router.get('/propiedades/agregar-imagen/:id', 
    protegerRuta,
    agregarImagen
)

router.post('/propiedades/agregar-imagen/:id', 
    protegerRuta,
    upload.single('imagen'),
    almacenarImagen
)


export default router