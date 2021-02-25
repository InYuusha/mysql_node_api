const mysql = require('mysql')

const pool = mysql.createPool({
    host:'localhost',
    user:'',
    password:'',
    database:'',
    
})



exports.getAll = function(req,res){
    
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let query = `SELECT * FROM mytask`

        conn.query(query,(err,result)=>{
            if(err) return {success:false,msg:err}
            res.send(result)
          
        })
    })
    
}

exports.getOne = function(req,res){
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let tag = req.params.tag;
        let query = `SELECT task, tag FROM mytask WHERE tag='${tag}'`
        conn.query(query,(err,result)=>{
            if(err) return{success:false,msg:err}
            res.send(result)
        })
    })

}

exports.post=function(req,res){
   
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        
        let task = req.body.task;
        let tag = req.body.tag;

        let query = `INSERT INTO mytask(task , tag) VALUES (N'${task}','${tag}')`
        conn.query(query,(err,result)=>{
            if(err) res.send({success:false,msg:err})
            res.send(result)
        })
    })
}


