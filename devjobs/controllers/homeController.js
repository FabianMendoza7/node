exports.mostrarTrabajos = (req, res) => {
    res.render('home', {
        nombrePagina: 'DevJobs',
        tagLine: 'Encuentra y Publica Trabajos para Desarrolladores Web',
        barra: true,
        boton: true
    })
}