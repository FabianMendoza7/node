import Turno from './Turno'
import Spinner from './Spinner'

const ListaTurnos = ({turnos, cargando}) => {

  return (
    <div className="w-full lg:w-1/2 md:h-screen mx-auto">
      <div>
        {cargando && <Spinner />}
      </div>

      {
        turnos && turnos.length ? (     
          
            <table className="w-full text-sm text-left text-gray-900 dark:text-gray-900 rounded-sm">
              <thead className="text-sky-700 bg-sky-50 dark:bg-sky-700 dark:text-white">
                <tr>
                  <th scope="col" className="py-3 px-6">
                      Fecha
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Hora Inicio
                  </th> 
                  <th scope="col" className="py-3 px-6">
                      Hora Fin
                  </th> 
                  <th scope="col" className="py-3 px-6">
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