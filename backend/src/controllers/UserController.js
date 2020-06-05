const connection= require('../database/connection');
const crypto= require('crypto');

module.exports={
    async index(req,res){
        const response= await connection('users').select('*');
        
        return res.json(response);
    },
    async create(req,res){//Imagem
        const id= crypto.randomBytes(4).toString('hex');
        const {name,email,password}= req.body;

        const response= await connection('users')
        .where('email', email)
        .select('email')
        .first()

        if(response){
            return res.status(401).json({ error: 'User already' });
        }

        const data= await connection('users').insert({
            id,
            //avatar: `http://localhost:3030/files/${req.file.filename}`,
            avatar: req.file.filename,
            name,
            email,
            password
        });

        //return res.json(data);
        return res.status(204).send();

    },

    async update(req,res){//Imagem
        const user_id= req.headers.authorization;
        const {name,password}= req.body;

        const response= await connection('users')
        .where('id', user_id)
        .select('id')
        .first()

        if(!response){
            return res.status(401).json({ error: 'User not found' });
        }

       await connection('users')
       .where('id', user_id)
       .update({
            name,
            //email,
            password
        })

        return res.status(204).send();
    },

    async delete(req,res){
        const user_id= req.headers.authorization;

        const response= await connection('users')
        .where('id', user_id)
        .select('id')
        .first()

        if(!response){
            return res.status(401).json({ error: 'Nenhum dado encontrado' });

        }

        await connection('users')
        .where('id', user_id)
        .delete();

        return res.status(204).send();
    }
}