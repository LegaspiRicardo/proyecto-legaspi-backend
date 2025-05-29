const pool = require('../config/db');

const getAllTasks = async () => {
    const [rows] = await pool.query('SELECT * FROM tasks');
    return rows;
};


const getTaskById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?' , [id]);
    return rows [0];
};


const createTask = async (task) => {
    const{ title, description } = task;
    const [result] = await pool.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
    return {id: result.insertId, title, description};
};


const updateTask = async (id, task) => {
    const{ title, description } = task;
    await pool.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id]);
    return {id, title, description};
};


const deleteTask = async (id) => {
    await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
    return {id};
};

module.exports ={
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};