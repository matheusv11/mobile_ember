const connection= require('../database/connection');

module.exports={
    async index(req,res){
        const user_id= req.headers.authorization;
            // avatar: `http://192.168.1.4:3030/files/${response.avatar}`,

        const user_data= await connection('users').where('id', user_id).first();
        const content_data= await connection('contents').where('user_id', user_id).select('*')
        
        const {name,email,avatar}= user_data;
        const {id, title,description, image}= content_data
        return res.json({user_data:{
            name,
            email,
            avatar: `http://192.168.1.4:3030/files/${avatar}`
        }, 
        content_data
        // content_data:{
        //     id,
        //     title,
        //     description,
        //     image: `http://192.168.1.4:3030/files/${image}`
        // }
    });

    },

}