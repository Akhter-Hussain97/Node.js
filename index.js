const express=require('express');
const app=express();
const mongoose=require('mongoose');
const studentRoute=require('./routes/route.student')
mongoose.connect('mongodb://localhost:27017/crud_data')
.then(()=>{
    console.log("Connect Mongodb");
})
app.use(express.json());
app.use('/api/students', studentRoute);
app.use(express.urlencoded({extended: false}));
app.listen(3000, (req, res)=>{
  console.log("Express Js run on port 3000");
});
app.get('/', (req, res)=>{
    res.send('Send data');
})
