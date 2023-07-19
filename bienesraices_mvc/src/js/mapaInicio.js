(function(){
    const lat = 6.2553173;
    const lng = -75.5896774;
    const mapa = L.map('mapa-inicio').setView([lat, lng ], 16);

    let markers = new L.FeatureGroup().addTo(mapa)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);    

    const obtenerPropiedades = async () => {
        try{
            const url = '/api/propiedades'
            const respuesta = await fetch(url)
            const {propiedades} = await respuesta.json()
            console.log(propiedades)

            mostrarPropiedades(propiedades)

        }catch(error){
            console.log(error)
        }
    }

    obtenerPropiedades()

    const mostrarPropiedades = propiedades => {
        propiedades.forEach(propiedad => {
            // Agregar los pines
            const marker = new L.marker([propiedad?.lat, propiedad?.lng], {
                autoPan: true
            })
            .addTo(mapa)
            .bindPopup('Información aquí')

            markers.addLayer(marker)
        })
    }

})()