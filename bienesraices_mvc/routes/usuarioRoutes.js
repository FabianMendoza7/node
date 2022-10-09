import express from 'express';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({msg: "Hola Mundo!!"});
    })
    .post((req, res) => {
        res.json({msg: "Ruta prueba"});
    })

export default router;