import { validationResult } from 'express-validator'
import Precio from '../models/Precio.js'
import Categoria from '../models/Categoria.js'

const admin = (req, res) => {
    res.render('propiedades/admin', {
        pagina: 'Mis Propiedades',
        barra: true
        //csrfToken: req.csrfToken()
    });    
}

// Formulario para crear una nueva propiedad.
const crear = async (req, res) => {
    // Consultar Modelo de Precio y Categoria.
    const [categorias, precios] = await Promise.all([
        Categoria.findAll(),
        Precio.findAll()
    ])

    res.render('propiedades/crear', {
        pagina: 'Crear Propiedad',
        barra: true,
        csrfToken: req.csrfToken(),
        categorias,
        precios,
        datos: {}
    });   
}

const guardar = async (req, res) => {
    // Validación.
    let resultado = validationResult(req)

    if(!resultado.isEmpty()){
        // Consultar Modelo de Precio y Categoria.
        const [categorias, precios] = await Promise.all([
            Categoria.findAll(),
            Precio.findAll()
        ])
                
        return res.render('propiedades/crear', {
            pagina: 'Crear Propiedad',
            barra: true,
            csrfToken: req.csrfToken(),
            categorias,
            precios,
            errores: resultado.array(),
            datos: req.body
        });   
    }

    // Crear un registro.
    const { titulo, descripcion, habitaciones, estacionamiento, wc, calle, lat, lng, precio: precioId, categoria: categoriaId } = req.body

    try {
        const propiedadGuardada = await Propiedad.create({
            titulo, 
            descripcion, 
            habitaciones, 
            estacionamiento, 
            wc, 
            calle, 
            lat, 
            lng,
            precioId,
            categoriaId          
        })

    } catch(error) {
        console.log(error)
    }
}

export {
    admin,
    crear,
    guardar
}