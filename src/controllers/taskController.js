const taskModel = require ('../models/taskModel');

const getTasks = async (req, res) => {
    const task = await taskModel.getAllTasks();
    res.json(tasks);
};


const getTask = async (req, res) => {
    const task = await taskModel.getTaskById(req.params.id);
    res.json(task)
};



const createTask = async (req, res) => {
    const newTask = await task.Model.createTask(req.body);
    req.status(201).json(newTask);
};




const updateTask = async (req, res) => {
    const updateTask = await task.Model.updateTask(req.params.id, req.body);
    req.json(updateTask);
};


const deleteTask = async (req, res) => {
    const deleteTask = await task.Model.deleteTask(req.params.id);
    req.json(deleteTask);
};


module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}