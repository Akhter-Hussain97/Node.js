const express = require('express');
const app = express();
const mongoose=require('mongoose');

app.listen(3000, () => {
    console.log("Successfully connected to the port 3000");
})
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.get('/home', (req, res)=>{
    res.send("Hello");
})
app.get('/add-contact', (req, res)=>{
    res.render('add-contact');
});
app.post('/add-contact', (req, res)=>{
})
app.get('/update-contact', (req, res)=>{
    res.render('update-contact');
})
app.post('/update-contact', (req, res)=>{
})
app.get('/show-contact', (req, res)=>{
    res.render('show-contact');
})
app.get('/delete-contact', (req, res)=>{
})