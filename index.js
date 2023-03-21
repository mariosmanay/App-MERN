const mongoose = require('mongoose');
const {
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    IP_SERVER,
    API_VERSION
} = require('./constants');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3977;
app.use(express.json());



app.listen(PORT, () => {
    console.log("######################")
    console.log("##### API RESTFUL ####")
    console.log("######################")
    console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
})


const connectDB = async () => {
    try {
      await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`)
  
      console.log('La conexión con la base de datos ha sido exitosa.');
    } catch (err) {
      console.log('Error al conectar a la base de datos', err);
    }
  }
  
  connectDB()