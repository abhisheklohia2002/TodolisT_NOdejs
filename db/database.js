const mongoose = require("mongoose");


const connectted = (url)=> {
    return  mongoose.connect(url,{
        // useCreateIndex: true,
        // useFindAndModify: false,
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
}
mongoose.set('strictQuery', false);

module.exports = connectted;



