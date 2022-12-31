const {getAlltasks,createTask,GetTask,updateTask,deleteTask} = require("../controller/tasks")
const express = require("express");
const router = express.Router();


router.route("/").get(getAlltasks).post(createTask)

router.route("/:id").get(GetTask).patch(updateTask).delete(deleteTask)


module.exports = router;



