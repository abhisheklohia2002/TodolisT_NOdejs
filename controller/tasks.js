
const { findById } = require("../model/tasks");
const model = require("../model/tasks")


const getAlltasks = async (req,res) => {
    // res.send("welocme to Home")
try {
    
    const doc = await model.find({});
    console.log(doc)
    res.status(201).json({doc,amount:doc.length});

} catch (error) {
    console.log(error)
}
    
}


const createTask  = async (req,res)=>{
try {
    console.log(req.body);

    const task = new model(req.body);
    await task.save();
    
    res.status(201).json({task})
} catch (error) {
     console.log(error)
}
} 


const GetTask  = async (req,res)=>{
    // res.send(" single get task")
try {
    // res.json({id:req.params.id})
    const {id:task}  = req.params;

    const doc = await model.findOne({_id:task});
    if(!doc){
        return res.status(404).json({msg:"No task with Id "})
    }
    res.status(201).json({doc})
    
} catch (error) {
   console.log(error) 
}

}

const updateTask  = async(req,res)=>{
  try {
    const {id:task}  = req.params;
   
    const doc = await model.findOneAndUpdate({_id:task},req.body,{
        new:true,
        runValidators:true
    });
    res.status(201).json({doc})
    
  } catch (error) {
    console.log(error)
  }
}




const deleteTask  =  async(req,res)=>{
    // res.send(" single delete ask")
    try {
  
    const {id:task}  = req.params;
  
    const data  = await model.findOneAndDelete({_id:task})
    if(!data){
        return res.status(404).json({msg:`No task with Id:${task} `})
    }
    res.status(201).json({data})
    // res.status(200).json({data:null,status:"success "})
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAlltasks,createTask,GetTask,updateTask,deleteTask
}

