import { check, validationResult } from 'express-validator'
import Usuario from "../models/Usuario.js";
import { generarId } from '../helpers/tokens.js';

const formularioLogin = (req, res) => {
    res.render('auth/login',{
        pagina: 'Iniciar Sesión'
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro',{
        pagina: 'Crear Cuenta'
    });
}

const registrar = async (req, res) => {
    // Validación.
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacío').run(req);
    await check('email').isEmail().withMessage('El email no es válido').run(req);
    await check('password').isLength({ min: 6 }).withMessage('El password debe ser de al menos 6 caracteres').run(req);
    await check('repetir_password').equals(req.body.password).withMessage('Los passwords no coinciden').run(req);
    let resultado = validationResult(req);

    // Verificar que no haya errores.
    if(!resultado.isEmpty()){
        // Errores.
        return res.render('auth/registro',{
            pagina: 'Crear Cuenta',
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        });
    }
    
    //res.json(resultado.array());

    // Verificar que el usuario no esté duplicado.
    const {nombre, email, password} = req.body;
    const existeUsuario = await Usuario.findOne({ where: {email}})

    if(existeUsuario){
        return res.render('auth/registro',{
            pagina: 'Crear Cuenta',
            errores: [{msg: 'El usuario ya está registrado'}],
            usuario: {
                nombre,
                email
            }
        });        
    }

    await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
    });
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password',{
        pagina: 'Recupera tu Acceso'
    });
}

export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}