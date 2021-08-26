const jwt = require('jsonwebtoken');
const env=require("../env");

module.exports={
     SignIn:(obj)=>{
       try{

        const token = jwt.sign(obj, env.key);
        return token;
        }catch(e){
            throw e;
        }
     },
    async  verify(req,res,next){
       try{
       let token=req.headers.token;
       if(!token)
        res.status(401).json({message: "token required", status: 401})
        let decoded =  jwt.verify(token, env.key);
        if(decoded.email!=req.body.email)
             res.status(401).json({message: "Invalid token", status: 401})
          next();   
       }catch(e){
        res.status(401).json({message: "Invalid Token", status: 401})
       }
           
     }
}