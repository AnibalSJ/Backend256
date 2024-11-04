const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// estas son las rutas del crud
router.post('/', clienteController.agregarClientes); // post para guardar
router.get('/', clienteController.buscarClientes); // get para mostrar
router.get('/:id', clienteController.mostrarClientes); 
// router.patch('/:id', clienteController.modificarClientes);  //modificar clientes
router.put('/:id', clienteController.actualizarClientes); 
router.delete('/:id', clienteController.eliminarClientes); 


module.exports = router;