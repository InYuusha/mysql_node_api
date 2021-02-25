const {getAll,getOne, post} = require('../db/index.js')

//all task
exports.getAllTasks = async function(req,res){

getAll(req,res)
}

//specific task with title
exports.getOneTask = function(req,res){
    getOne(req,res)

}

exports.post = function(req,res){
    
    post(req,res)
    
}