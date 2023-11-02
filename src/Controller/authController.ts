import express from 'express'
import DbSingleton from '../db/dbSingleton'

class AuthController{
    
    login(req:express.Request,res:express.Response){}

    async register(req:express.Request,res:express.Response){
        try{
            const clientDb = DbSingleton.getClient()
            const {mail,pass,name,avatar} = req.body
            //TODO: Fazer isso de uma maneira mais interessante, dps pesquisar como fazem isso em arquiteturas sérias
            const hasEmail = await clientDb?.query(`SELECT * from users WHERE email = '${mail}'`)
            
            if(hasEmail?.rows.length != 0){
                return res.status(409).json({code:'CONFLICT',message:'Email already exists.'})
            } 
            
            const query = "INSERT INTO users (name, pass, avatar, email, n_subscribe, n_videos)" +
             `VALUES ('${name}', '${pass}', '${avatar}', '${mail}', 0, 0)`;

             const resultDB = await clientDb?.query(query)
             return res.status(201).json({code:'SUCCESS',message:'Your account has just been created'})
            
        }catch(err){
            //TODO: Ver um dia uma boa maneira de fazer os erros...
            console.log(err)
            return res.status(500).json({"ERROR":"DEU ERRO AI MEU CHAPA"})
        }
    }

   
}

export default AuthController