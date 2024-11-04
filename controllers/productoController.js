const Producto = require('../models/Productos');

exports.agregarProducto = async (req, res) =>{
    try {
        let producto = new Producto(req.body);
        await producto.save();
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar el producto');
    }
}

exports.buscarProductos = async (req, res) =>{
    try {
        const producto = await Producto.find();
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos');
    }
}

exports.mostrarProductos = async(req, res) =>{
    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).send({msg: "Producto no encontrado con ese ID"})
        }else{
            res.json(producto);
        }
    } catch (error) {
        res.status(500).send('Hubo un error al mostrar el producto');
    }
}

exports.actualizarProductos = async(req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(!producto){
            res.status(404).send({msg: "Producto no encontrado con ese ID"})
        }else{
            res.json(producto);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el producto');
    }
}

exports.eliminarProductos = async(req, res) => {
    try {
        const producto = await Producto.findById(req.params.id); //metodo para buscar cliente
        if(!producto){ //se valida si el cliente existe o no
            res.status(404).send({msg: "Producto no encontrado con ese ID"})
        }else{
            await Producto.findOneAndDelete({_id: req.params.id}); // se llama al modelo y despues el metodo
            res.json({msg: "Producto eliminado exitosamente"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto');
    }
}