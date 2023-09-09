import React from 'react';

/** Routing */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Layout */
import Header from './componentes/layout/Header';
import Navegacion from './componentes/layout/Navegacion';

/** Componentes */
import Clientes from './componentes/clientes/Clientes';
import NuevoCliente from './componentes/clientes/NuevoCliente';
import Productos from './componentes/productos/Productos';
import Pedidos from './componentes/pedidos/Pedidos';


function App(){
  return (
    <Router>
      <Header />

      <div className="grid contenedor contenido-principal">
        <Navegacion />

        <main className="caja-contenido col-9">
          <Switch>
            <Route exact path='/' Component={Clientes} />
            <Route exact path='/clientes/nuevo' Component={NuevoCliente} />

            <Route exact path='/productos' Component={Productos} />

            <Route exact path='/pedidos' Component={Pedidos} />
          </Switch>
        </main>
      </div>      
    </Router>
  )
}

export default App;
