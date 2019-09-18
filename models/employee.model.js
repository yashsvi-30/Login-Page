const mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    city:{
        type:String
    },
    mobile:{
        String
    }
});

mongoose.model('Employee', employeeSchema);

