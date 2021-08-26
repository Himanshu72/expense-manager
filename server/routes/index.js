const express = require('express');
const router = express.Router();
const utlit = require("../utility/db");
const auth= require("../utility/auth");
const { emit } = require('../schema/user');

router.post("/reg",async (req,res)=>{
        try{
            
            console.log(req.body);
            let data=await utlit.insertUser(req.body);
            
            let token= auth.SignIn(req.body);
            let resp={
                token:token,
                data:data._doc
            }

            res.status(200).json(resp);  
        }catch(e){
           console.log(e);
            res.status(500).json({message: "Internal Server error", status: 500})
        }
});


router.get("/login", async (req, res) => {
    
    
    try {
       let data=await utlit.getUser(req.body.email);
          if(data.password==req.body.password){
                 let token= auth.SignIn(req.body);
          


              res.status(200).json({data,token});
        
          }else
                res.status(400).json({message:"Invalid password",status:400});
         

    } catch(e) {
        console.log(e);
        res.status(500).json({message:"Invalid Server error",status:500});
        throw e;
    }
    
});

router.put("/addCategory",auth.verify,async (req,res)=>{
    try{    
    let data= await utlit.addCatagory(req.body);
    res.status(200).json(data);
    }catch(e){
        console.log(e);
        res.status(500).json({message:"Invalid Server error",status:500});
    
    }
})

router.put("/addExpense",auth.verify,async (req,res)=>{
    try{
        req.body._id=req.body.category;
        let data= await utlit.addExpense(req.body);
        res.status(200).json(data);
    }catch(e){
        console.log(e);
        res.status(500).json({message:"Invalid Server error",status:500});
    }
});

module.exports = router;
