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

// Sripting for getting task request
const getAllTasks = (req , res ) => {
    res.json(tasks);
};

//Scripting for updateTask trquest
const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, status } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
  
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const updatedTask = {
        ...tasks[taskIndex],
        title: title || tasks[taskIndex].title,
        description: description || tasks[taskIndex].description,
        status: status || tasks[taskIndex].status
    };

    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
};

//DwleteTask request 
const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
  
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    tasks.splice(taskIndex, 1);
    res.sendStatus(204);
  };