(function(){
    const lat = 6.2553173;
    const lng = -75.5896774;
    const mapa = L.map('mapa-inicio').setView([lat, lng ], 16);

    let markers = new L.FeatureGroup().addTo(mapa)
    let propiedadesFilter = []

    // Filtros.
    const filtros = {
        categoria: '',
        precio: ''
    }

    const categoriasSelect = document.querySelector('#categorias')
    const preciosSelect = document.querySelector('#precios')    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);   
    
    // Filtrado de categorías y precios.
    categoriasSelect.addEventListener('change', e => {
        // para obtener número se le antepone el + a e.target.value
        filtros.categoria = +e.target.value
        filtrarPropiedades()
    })

    preciosSelect.addEventListener('change', e => {
        filtros.precio = +e.target.value
        filtrarPropiedades()
    })    

    const obtenerPropiedades = async () => {
        try{
            const url = '/api/propiedades'
            const respuesta = await fetch(url)
            const {data} = await respuesta.json()
            propiedadesFilter = data;

            mostrarPropiedades(propiedadesFilter)

        }catch(error){
            console.log(error)
        }
    }

    const mostrarPropiedades = propiedades => {
        propiedades.forEach(propiedad => {
            // Agregar los pines
            const marker = new L.marker([propiedad?.lat, propiedad?.lng], {
                autoPan: true
            })
            .addTo(mapa)
            .bindPopup(`
                <p class="text-indigo-600 font-bold">${propiedad?.categoria.nombre}</p>
                <h1 class="text-xl font-extrabold uppercase my-2">
                    ${propiedad?.titulo}
                </h1>
                <img src="/uploads/${propiedad?.imagen}" 
                    alt="Imagen de la propiedad ${propiedad?.titulo}">
                </img>
                <p class="text-gray-600 font-bold">${propiedad?.precio.nombre}</p>
                <a href="/propiedad/${propiedad?.id}" class="bg-indigo-600 block p-2 text-center font-bold uppercase">Ver propiedad</a>
            `)

            markers.addLayer(marker)
        })
    }

    const filtrarPropiedades = () => {
        const resultado = propiedadesFilter.filter(filtrarCategoria).filter(filtrarPrecio)
    }

    const filtrarCategoria = propiedad => filtros.categoria ? propiedad.categoriaId === filtros.categoria : propiedad

    const filtrarPrecio = propiedad => filtros.precio ? propiedad.precioId == filtros.precio : propiedad

    obtenerPropiedades()

})()