const connection= require('../database/connection');

module.exports={
    async index(req,res){
        const user_id= req.headers.authorization;

        const response= await connection('contents')
        .where('user_id', user_id)
        .select('*')
        
        return res.json(response);
                // if(response==""){
        //     res.json('oi')
        // }
    },

}