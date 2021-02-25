const express = require('express')
const router = express.Router()
const {getAllTasks,getOneTask,post} = require('../controllers/taskhandler')

//routes

//get all tasks
router.get('/task',getAllTasks)

//get one task
router.get('/task/:tag',getOneTask)

//post 
router.post('/task',post)




//exports
module.exports = router


