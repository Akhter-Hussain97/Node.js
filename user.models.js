const mongoose=require('mongoose');
const userScheme=new mongoose.Schema({
    username:{
        type:String,
        require: true,
        uinque: true
    },
    userpassword:{
        type: String,
        require: true
    }
});
module.exports=mongoose.model('User', userScheme);