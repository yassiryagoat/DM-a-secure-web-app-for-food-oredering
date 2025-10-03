import userModel  from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from  'validator'

//listUser
const listUser =  async (req ,res)=>{
    try{    
        const users = await userModel.find({})
        res.json({success:true,data:users})

    }catch(err){
        console.log(err)
        res.json({success:false,message:'Error'})
    }
}

//login user 
const loginUser = async (req,res) =>{
    const {email,password} = req.body  
    try {
            const user = await userModel.findOne({email})
            if(!user){
                return res.json({success:false,message:'Error Email or Password'})
            }
            const isMatch  = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.json({success:false,message:'Error Email or Password'})
            }
               
            const token = creatToken(user._id)
            res.json({success:true,token })
            
           
        } catch (error) {
            console.log(error);
            res.json({success:false,message:'Error'})

        }
}

const creatToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user 
const registerUser = async (req,res)=>{
        const {name,email,password} = req.body
        try {
            const exists  = await userModel.findOne({email})
            if (exists) {
                return res.json({success:false ,message:'L\'utilisateur existe déjà'})
            } 

            //validating email and password format and name 
            if (name<2) {
                return res.json({success:false ,message:'S\'il vous plaît entrez votre nom'})
            } 
            if(!validator.isEmail(email)){
                return res.json({success:false ,message:'Veuillez entrer un email valide'}) 
            }
            if(password<8){
                return res.json({success:false ,message:'Veuillez entrer un mot de passe fort'}) 
            }
            // Cripting the password
            const salt =  await bcrypt.genSalt(10)
            const passwordHashed = await bcrypt.hash(password,salt)

            const newUser =new userModel( {
                name : req.body.name,
                email:req.body.email,
                password:passwordHashed
            })
            console.log(newUser);
            const user = await newUser.save()
            const token = creatToken(user._id)
            res.json({success:true,token})
        } catch (error) {
            console.log(error);
            res.json({success:false, })
        }
}


export {listUser,loginUser,registerUser}