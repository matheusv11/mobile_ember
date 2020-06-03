const connection= require('../database/connection');

module.exports={

    async create(req,res){

         await connection('images').insert({
           size: req.file.size,
           url: `http://localhost:3030/files/${req.file.filename}`
       })

      //.json({ok: 'true'})
    }
}