require('./models/db');

const express = require('express');
const employeeController = require('./controllers/employeeController');
var app = express();
app.listen(3000,(err)=>{
    if(!err) {
        console.log('Server connection succeeded!')
    }
    else{
        console.log("Server connection failed!"+ err)
    }
});

app.use('/employee', employeeController);