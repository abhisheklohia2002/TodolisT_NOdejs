
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const app = express()
;

const task_router = require("../controller/tasks");
const body_parser = require("body-parser");
app.use(express.static(path.join(__dirname,"../public")))

app.use(body_parser.urlencoded({extended:true}))


app.use(body_parser.json())


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
cb(null,path.join(__dirname,"../public/imageuset"),(error,res)=>{
    if(error)throw error
})
    },
    filename:(req,file,cb)=>{
        const name = Date.now()+"-"+file.originalname;
        cb(null,name)
    }
})


const upload = multer({storage:storage});




router.post("/data",upload.single("image"),task_router.PostRequest)


router.get("/data_get",task_router.Data_get)

router.delete('/data_get/:id',task_router.Data_delete)
module.exports = router;



