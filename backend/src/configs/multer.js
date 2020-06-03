const multer = require('multer');
const crypto= require('crypto');
const path= require('path');


module.exports={
    storage: multer.diskStorage({
        destination:(req,res,cb)=>{
            cb(null, path.resolve(__dirname, '../images'))
        },  

        filename:(req,file,cb)=>{
            const hash= `${crypto.randomBytes(8).toString('hex')}-${file.originalname}`
            cb(null,hash)
        }
    }),

    limits:{
        fileSize: 1048576
    },

    fileFilter:(req,file,cb)=>{
        const fileType= ["image/png", "image/jpg", "image/jpeg"]

        if(fileType.includes(file.mimetype)){
            return cb(null, true)
        }
        else{
            return cb(new Error('Arquivo nao suportado'))
        }
    }
}
