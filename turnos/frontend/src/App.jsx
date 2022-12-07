import { useState } from 'react'
import Header from './components/Header'
import ListaTurnos from './components/ListaTurnos'
import Formulario from './components/Formulario'

function App() {
  const [turnos, setTurnos] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          turnos={turnos}
          setTurnos={setTurnos}
        />
        <ListaTurnos
          turnos={turnos}
        />
      </div>
    </div>
  )
}

export default App
