const connection= require('../database/connection');

module.exports={
    async create(req,res){
        const {email,password}= req.body

        const response= await connection('users')
        .where('email', email)
        .andWhere('password', password)
        .select('id')
        .first()

        if(!response){
            return res.status(401).json({ error: 'User not found' });
        }
        return res.json(response)
            // avatar: `http://192.168.1.4:3030/files/${response.avatar}`,

    }
}