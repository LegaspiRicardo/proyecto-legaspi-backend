const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());


//Rutas
const taskRoutes = require('./routes/taskRoute');
app.use('/api/tasks', taskRoutes);


// Rutas para crear usuarios
const userRoutes = require('./routes/userRoute');
app.use('/api/users', userRoutes);


//Inicializar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en puerto: ${PORT}`);
})