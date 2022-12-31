const mongoose = require("mongoose");

const taskschema = new mongoose.Schema({
name : {
    type:String,
    required:[true,"Must provide name"],
    trim:true,
    maxlength :[20,"name can not be more than 20 character"]

},
completed:{
    type:Boolean,
    default:false
},

})

const model = mongoose.model("task",taskschema);

module.exports = model;
