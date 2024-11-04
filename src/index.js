const express = require('express'); //Se llama la framework
const conectarDB = require('../config/db')
const cors = require('cors');

//Creamos la variable app
const app = express();
const port = 5000;

//Conexion bases de datos
conectarDB();
app.use(cors());
app.use(express.json());

// Ruta para consumir la api
app.use('/api/clientes', require('../routes/rutasCliente'));
app.use('/api/producto', require('../routes/rutaProducto'));

//Ruta para verificar el servidor en la web
app.get('/', (req, res) => {
    res.send("Hola, estamos conectados desde la web")
});

//Ruta del servidor
app.listen(port, () => {
    console.log("El servidor está conectado http://localhost:5000/");
})