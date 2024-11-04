const mongoose = require('mongoose');
require('dotenv').config();

//Conexion con mongo
const conectarDB = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Estamos conectados con mongo DB"))
    .catch((err) => console.error(err));
}

module.exports = conectarDB;