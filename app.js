const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const port = 5000 
const connectted = require("./db/database")
require('dotenv').config();


const  cors = require("cors");

app.use(express.json())
app.use(cors({
    origin:"*"
}))









//routes 
 
app.use("/api",tasks); // one get all the task 





const start  = async() =>{
try {
   
    await connectted(process.env.MONGO_URI);
    app.listen(port,()=>{ console.log(`server is running at ${port}`); })
} catch (error) {
    console.log(error)
}
}


start()