// Importing express for the script file

const express = require('express');
const taskController = require ('../controllers/taskController');

//Creating ne routing object
const router = express.Router();

// Set up routes for CRUD

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router