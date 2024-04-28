// Importing task.js in this script file
const Task = require('../models/Task');

//In memory Storage

const tasks = [];
let nextId = 1;


const createTask = (req , res) => {
    const {title,descripton,status } = req.body;
    const newTask = new Task(nextId++ , title , descripton , status );
    tasks.push(newTask);
    res.status(201).json(newTask);
};
