// Importing express framework and taskroutes modules in my script file
const express = require('express');
const taskroutes = require('./routes/taskroutes');

// Setting up express ap and configure it to parse incoming json request 
const app = express();
app.use(express.json())
