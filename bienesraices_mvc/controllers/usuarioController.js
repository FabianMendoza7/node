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

const registrar = (req, res) => {
    
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