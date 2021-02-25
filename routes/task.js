const express = require('express')
const router = express.Router()
const {getAllTasks,getOneTask,postTask,removeTask,updateTask} = require('../controllers/taskhandler')

//routes

//get all tasks
router.get('/task',getAllTasks)

//get one task
router.get('/task/:tag',getOneTask)

//post task
router.post('/task',postTask)

//delete task by tag
router.delete('/task/:tag',removeTask)

//update task
router.put('/task/:tag',updateTask)
//exports
module.exports = router


