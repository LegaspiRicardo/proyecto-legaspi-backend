const express = require('express');
const router = express.Router();
const taskConstroller = require('../controllers/taskController');


//Obtener todas las tareas
router.get('/', taskConstroller.getTasks);

//Obener una tarea por ID
router.get('/:id', taskConstroller.getTask);

//Crear una nueva tarea
router.post('/', taskConstroller.createTask);

//Actualizar una tarea por ID
router.put('/:id', taskConstroller.updateTask );

//Eliminar una tarea por ID
router.delete('/:id', taskConstroller.deleteTask );


module.exports = router;