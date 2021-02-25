const express = require('express')
const router = express.Router()
const {getAllTasks,getOneTask,postTask,removeTask} = require('../controllers/taskhandler')

//routes

//get all tasks
router.get('/task',getAllTasks)

//get one task
router.get('/task/:tag',getOneTask)

//post 
router.post('/task',postTask)

router.delete('/task/:tag',removeTask)


//exports
module.exports = router


