const express = require('express');
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');
const router = express.Router();

module.exports = function() {

    /** CLIENTES **/
    
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

    /** PRODUCTOS **/

    // Agrega nuevo producto.
    router.post('/productos', 
        productosController.subirArchivo,
        productosController.nuevoProducto);

    // Mostrar productos.
    router.get('/productos', productosController.mostrarProductos);

    // Mostrar producto por id.
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    // Actualizar un producto.
    router.put('/productos/:idProducto',
        productosController.subirArchivo,
        productosController.actualizarProducto);

    // Eliminar un producto.
    router.delete('/productos/:idProducto', productosController.eliminarProducto);

    /** PEDIDOS **/
    router.post('/pedidos', pedidosController.nuevoPedido);

    return router;
}