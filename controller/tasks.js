const express = require("express");

const app =express();
const task_model = require("../model/tasks");
app.use(express.json())

const PostRequest = async(req,res)=>{
    console.log(req.body)
    try {

        const data = new task_model({
            name:req.body.name,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description,

        })

        const save_data = await data.save();

        res.status(200).send({messgae:save_data})


    } catch (error) {
        console.log(error)
        // res.status(404).send({messgae:error})
        
    }
}
const Data_get = async(req,res)=>{
    try {
        const data_show = await task_model.find({});
        res.status(200).send({message:data_show})
    } catch (error) {
        
    }
}



const Data_delete = async(req,res)=>{
    try {
        const {id:task}  = req.params;
        const data = await task_model.findOneAndDelete({_id:task})
res.status(200).send({message:data})
    } catch (error) {
        console.log(error)
        res.status(400).send({message:error})
    }
}

module.exports = {PostRequest,Data_get,Data_delete}