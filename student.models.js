const mongoose=require('mongoose');
const StudentSchma=new mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
     last_name:{
        type: String,
        require: true
    },
     email:{
        type: String,
        unique: true,
        require: true
    },
     phone_no:{
        type: String,
        require: true
    },
     gender:{
        type: String,
        enum: ["male", "female", "other"],
        require: true
    }
})
 const Student=StudentSchma.models('Student', StudentSchema);
 module.exports=Student;