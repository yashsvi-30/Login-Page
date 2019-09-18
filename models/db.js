const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/EmployeeDB",{useNewUrlParser: true},(err)=>{
    if(!err) {
        console.log('Mongo DB connection succeeded!')
    }
    else{
        console.log("Mongo DB connection failed!"+ err)
    }
});

require('./employee.model');