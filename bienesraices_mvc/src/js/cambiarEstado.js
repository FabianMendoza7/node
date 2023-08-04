(function() {
    const cambiarEstadoBotones = document.querySelectorAll('.cambiar-estado')

    cambiarEstadoBotones.forEach(boton => {
        boton.addEventListener('click', cambiarEstadoPropiedad)
    })

    async function cambiarEstadoPropiedad(e){
        const { propiedadId: id } = e.target.dataset  //(obtiene el atributo personalidado data-propiedad-id)

        try {
            const url = `/propiedades/${id}`

            const respuesta = await fetch(url, {
                method: 'PUT'
            })
        }catch(error){
            
        }

    }
})()