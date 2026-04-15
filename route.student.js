const express= require('express');
const router=express.Router();
const students=require('../models/route.student');
router.get('/', async(req, res)=>{
    try{
       const stud=await students.find();
    }
    catch(err){
     res.status(500).json({message: err.message});
    }
})
router.get('/:id', async(req, res)=>{
    try{
       const stud=await students.findById(req.params.id);
       if(!stud) return res.status(404).json({message: 'Std not found'});
       res.json(stud);
    }
    catch(err){
     res.status(500).json({message: err.message});
    }
})
router.post('/:id', async(req, res)=>{
    try{
      const newstd=await students.create(req.body);
      res.status(201).json(newstd);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})
router.put('/:id', async(req, res)=>{
    try{
        const updatestd=await students.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updatestd) return res.status(404).json({message: 'Std not found'});
       res.json(updatestd);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})
router.delete('/:id', async(req, res)=>{
    try{
        const deletestd=await students.findByIdAndDelete(req.params.id);
        if(!deletestd) return res.status(404).json({message: 'Std not found'});
       res.json({message: "delete students"});
    }
     catch(err){
        res.status(500).json({message: err.message});
    }
})
module.exports=router;