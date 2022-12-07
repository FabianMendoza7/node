import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import ListaTurnos from './paginas/ListaTurnos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListaTurnos crear={true} />} />
          <Route path="consultar" element={<ListaTurnos crear={false} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
