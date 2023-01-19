const mongoose = require("mongoose");

const taskschema = new mongoose.Schema({
name : {
    type:String,
   required:true

},
price:{
    type:String,
    required:true
}
,
image:{
    type:String,
    required:true
}
,
description:{
    type:String,
    required:true

}
})

const model = new  mongoose.model("task",taskschema);

module.exports = model;
