import { useEffect, useState } from 'react'
import axios from 'axios'

const ListaTurnos = () => {
  const [servicios, setServicios] = useState([])
  const [fechaInicio, setFechaInicio] = useState()
  const [fechaFin, setFechaFin] = useState()
  const [idServicio, setIdServicio] = useState()
  const [turnos, setTurnos] = useState([])

  useEffect (() => {
    const consultarServicios = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/servicios`)
        setServicios(data)

      } catch(error) {
        console.log(error)
      }
    }

    consultarServicios()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(fechaInicio, fechaFin, idServicio)

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/turnos`, {fechaInicio, fechaFin, idServicio})
      console.log("turnos", data)
      setTurnos(data)

    } catch(error) {
      console.log(error)
    }    
  }  

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Generar Turnos</h1>

      <form 
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow rounded-lg px-8 py-8"
      >
        <div className="my-2">
          <label 
            className="text-gray-600 text-xl font-bold"
            htmlFor="fechaInicio"
          >
              Fecha Inicio
              &nbsp;&nbsp;
          </label>
          <input
              id="fechaInicio"
              type="date"
              className="p-3 mt-3 bg-gray-50 border rounded-xl w-full"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}              
          />
        </div>
        <div className="my-2">
          <label 
            className="text-gray-600 text-xl font-bold"
            htmlFor="fechaFin"
          >
              Fecha Fin
          </label>
          <input
              id="fechaFin"
              type="date"
              className="p-3 mt-3 bg-gray-50 border rounded-xl w-full"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}               
          />          
        </div>
        <div className="my-2">
          <label 
            className="text-gray-600 text-xl font-bold"
            htmlFor="idServicio"
          >
              Servicio
          </label>
          <select
            id="idServicio"
            className="p-3 mt-3 bg-gray-50 border rounded-xl w-full"
            value={idServicio}
            onChange={(e) => setIdServicio(e.target.value)}              
          >
          <option value="">Seleccione</option>
          {servicios.map(opcion => (
            <option
              key={opcion.id_servicio}
              value={opcion.id_servicio}
            >
              {opcion.servicio}
            </option>
          ))}
          </select>        
        </div>  
        <input
            type="submit"
            value="Generar Turnos"
            className="bg-sky-700 py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-sky-800 transitions-colors w-full mt-5"
          />                
      </form>
    </>
  )
}

export default ListaTurnos