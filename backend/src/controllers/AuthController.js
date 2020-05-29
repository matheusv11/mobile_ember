const connection= require('../database/connection');

module.exports={
    async create(req,res){
        const {email,password}= req.body

        const response= await connection('users')
        .where('email', email)
        .andWhere('password', password)
        .select('*')
        .first()

        if(!response){
            return res.status(401).json({ error: 'User not found' });
        }

        return res.json(response);
    }
}