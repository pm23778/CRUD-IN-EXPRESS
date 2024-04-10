const bcrypt = require("bcrypt")
const User = require("../models/User");




exports.signup = async(req,res)=>{
    try{
        // get data 
        const {name,email,password,role} = req.body;
        // check if user already exist 
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User Already Exist"
            });
        }
        // secure password 
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10)
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:'err in hash password'
            })
        }
        // create entry for  users 
        const user = await User.create({name,email,password:hashedPassword,role})
        return res.status(200).json({
            success:true,
            message:'user created successfully'
        });


    }
    catch(err){
         console.error(err);
         return res.ststus(400).json({
            success:false,
            message:'user cannot created  successfully'
         })
    }
}