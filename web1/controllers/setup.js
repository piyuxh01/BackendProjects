const User = require('../models/User');

exports.signup = async (req,res) =>{
    try{
        const {name,email,password,role} = req.body;
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
        }
        const user = await User.create({
            name,email,password,role
        })
        return res.status(200).json({
            success:true,
            message:"User created successfully"
        })
    } 
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(500).json({
                success:false,
                message:"Error Please try again later!"
            })
        }
        const isValid = await User.findOne({email});
        if(!isValid){
            return res.status(500).json({
                success:false,
                message:"Wrong email Please try again later!"
            })
        }
        else{
            const check = await User.findOne({password});
            if(check){
                return res.status(200).json({
                    success:true,
                    message:"User Logged in successfully"
                })
            }
            else{
                return res.status(500).json({
                    success:false,
                    message:"Wrong password Please try again later!"
                })
            }
        }
    } catch(error){
            console.log(error);
            return res.status(500).json({
            success:false,
            message:"Error Please try again later!"
        })
    }
}
