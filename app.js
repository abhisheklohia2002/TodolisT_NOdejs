const express = require("express");
const app = express();
const tasks = require("./routes/tasks")
const port = 5000 || process.env.PORT;
const connectted = require("./db/database")
const notFound = require("./middleware/not_found")




require('dotenv').config();


//middleware 
// app.use(express.static("./public"))
app.use(express.json())

// app.use(notFound) //*



//routes 
 
app.use("/api/v1/tasks",tasks); // one get all the task 





const start  = async() =>{
try {
   
    await connectted(process.env.MONGO_URI);
    app.listen(port,()=>{ console.log(`server is running at ${port}`); })
} catch (error) {
    console.log(error)
}
}


start()