// Importing express framework and taskroutes modules in my script file
const express = require('express');
const taskroutes = require('./routes/taskroutes');

// Setting up express ap and configure it to parse incoming json request 
const app = express();
app.use(express.json());

// Setting up my express.js app to use the taskroutes to for request from 'tasks' path
app.use('/tasks',taskroutes);

// Starts an express.js server on the port
const PORT = 3004;
app.listen(PORT , () =>{

    console.log('Server is running on the ${PORT}');


});