import React, { useEffect, useState } from 'react';

// Importar clientes axios.
import clienteAxios from '../../config/axios';
import Cliente from './Cliente';
import { Link } from 'react-router-dom';

const Clientes = () => {
    // Trabajar con el state.
    const [clientes, guardarClientes] = useState([]);

    // Query a la API.
    const consultarAPI = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');

        // Colocar el resultado en el state.
        guardarClientes(clientesConsulta.data);
    }

    // useEffect es similar a componentDidMount y willMount.
    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <>
            <h2>Clientes</h2>

            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente"> <i class="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>

            <ul className="listado-clientes">
                {clientes.map(cliente => (
                    <Cliente
                        key={cliente._id}
                        cliente={cliente}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default Clientes;