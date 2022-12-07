import Turno from './Turno'

const ListaTurnos = ({turnos}) => {

  return (
    <div className="w-full lg:w-1/2 md:h-screen mx-auto">
      {
        turnos && turnos.length ? (     
          
            <table class="w-full text-sm text-left text-sky-500 dark:text-sky-400 rounded-sm">
              <thead class="text-sky-700 bg-sky-50 dark:bg-sky-700 dark:text-white">
                <tr>
                  <th scope="col" class="py-3 px-6">
                      Fecha
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Hora Inicio
                  </th> 
                  <th scope="col" class="py-3 px-6">
                      Hora Fin
                  </th> 
                  <th scope="col" class="py-3 px-6">
                      Estado
                  </th>                                  
                </tr>
              </thead>
              <tbody>
              {
                turnos.map((turno) => (
                  <Turno
                    key={turno.id}
                    data={turno}
                  />
                ))
              }
              </tbody>
            </table>
        ) :
        (
          <h1></h1>
        )
    }
    </div>
  )
}

export default ListaTurnos