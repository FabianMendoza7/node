const express = require('express');
const clienteController = require('../controllers/clienteController');
const router = express.Router();

module.exports = function() {
    
    // Agrega nuevos clientes via POST.
    router.post('/clientes', clienteController.nuevoCliente);

    // Obtener todos los clientes.
    router.get('/clientes', clienteController.mostrarClientes);

    // Obtener un cliente en específico.
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);

    // Actualizar un cliente.
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    // Eliminar un cliente.
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);    

    return router;
}