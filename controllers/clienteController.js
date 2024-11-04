const Cliente = require('../models/Cliente');

//Funcion agregar clientes

exports.agregarClientes = async (req, res) =>{
    try {
        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

// metodo GET para mostrar clientes
// Funcion Buscar clientes
exports.buscarClientes = async (req, res) =>{
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).send('Hubo un error al mostrar los clientes');
    }
}

// Funcion para buscar a un cliente
exports.mostrarClientes = async(req, res) =>{
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"})
        }else{
            res.json(clientes);
        }
    } catch (error) {
        res.status(500).send('Hubo un error al mostrar el cliente');
    }
}

// Funcion modificar cliente - metodo patch
exports.modificarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"})
        }else{
            res.json(clientes);
        }
    } catch (error) {
        res.status(500).send('Hubo un error al modificar el cliente');
    }
}

// Funcion actualizar - metodo put 
exports.actualizarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"})
        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el cliente');
    }
}

exports.eliminarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findById(req.params.id); //metodo para buscar cliente
        if(!clientes){ //se valida si el cliente existe o no
            res.status(404).send({msg: "Cliente no encontrado con ese ID"})
        }else{
            await Cliente.findOneAndDelete({_id: req.params.id}); // se llama al modelo y despues el metodo
            res.json({msg: "Cliente eliminado exitosamente"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el cliente');
    }
}