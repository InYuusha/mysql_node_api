const {getAll,getOne, postOne, removeOne,updateOne} = require('../db/index.js')

//all task
exports.getAllTasks = async function(req,res){

getAll(req,res)
}

//specific task with title
exports.getOneTask = function(req,res){
    getOne(req,res)

}
//post a task
exports.postTask = function(req,res){
    postOne(req,res)
    
}

//remove a task
exports.removeTask=function(req,res){
    removeOne(req,res)
}

//update a task
exports.updateTask=function(req,res){
    updateOne(req,res)
}