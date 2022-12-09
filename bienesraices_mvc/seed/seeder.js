import { exit } from 'node:process'
import categorias from './categorias.js'
import Categoria from '../models/Categoria.js'
import db from '../config/db.js'

const importarDatos = async () => {
    try {
        // Autenticar.
        await db.authenticate()

        // Generar las columnas.
        await db.sync()

        // Insertamos los datos.
        await Categoria.bulkCreate(categorias)
        console.log('Datos importados correctamente!')
        exit()

    } catch (error) {
        console.log(error)
        exit(1)
    }
}

if(process.argv[2] === "-i"){
    importarDatos()
}