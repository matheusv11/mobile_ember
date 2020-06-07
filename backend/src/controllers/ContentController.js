const connection= require('../database/connection');

module.exports={
    async index(req,res){
        const response= await connection('contents').select('*');
        
        return res.json(response);
    },

    async create(req,res){//Imagem
        const user_id= req.headers.authorization;
        const {title,description}=req.body;
        
        const response= await connection('users')
        .where('id', user_id)
        .select('id')
        .first()

        if(!response){
            return res.status(401).json({ error: 'User not found' });
        }
        
        await connection('contents').insert({
            title,
            description,
            image: req.file.filename,
            user_id
        })

        return res.status(204).send();

    },

    async update(req,res){
        const {id}= req.query;
        const user_id= req.headers.authorization
        const {title,description}= req.body;

        const response= await connection('contents')
        .where('id', id)
        .select('user_id')
        .first();

        if(!response || response.user_id!==user_id ){
            return res.status(401).json({ error: 'Operation not permited' });
        }

        await connection('contents')
        .update({
            title,
            description
        })
        .where('id', id);

        return res.status(204).send();
    },

    async delete(req,res){
        const {id}= req.query;
        const user_id= req.headers.authorization;

        const response= await connection('contents')
        .where('id', id)
        .select('user_id')
        .first();

        if(!response || response.user_id!==user_id){
            return res.status(401).json({ error: 'Operation not permited' });
        }

        await connection('contents').where('id', id).delete();

        return res.status(204).send();
    }
}