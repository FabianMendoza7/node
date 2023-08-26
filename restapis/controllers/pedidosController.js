const Pedidos = require('../models/Pedidos');

exports.nuevoPedido = async(req, res, next) => {
    const pedido = await Pedidos(req.body);

    try{
        await pedido.save();
        res.json({
            mensaje: 'Se agregó un nuevo pedido'
        });
    } catch(error){
        console.log(error);
        next();
    }
}

// Muestra todos los pedidos.
exports.mostrarPedidos = async(req, res,next) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });

        res.json(pedidos);
    } catch(error){
        console.log(error);
        next();
    }
}

// Muestra un pedido por su id.
exports.mostrarPedido = async(req, res,next) => {
    try {
        const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });

        if(!pedido){
            res.json({mensaje: 'Ese pedido no existe'});
            return next();
        }
        res.json(pedido);
    } catch(error){
        console.log(error);
        next();
    }
}