import jwt from  'jsonwebtoken'

const authMiddleware = async(req,res,next) =>{
    const {token} = req.headers
    if(!token){
        return res.json({success:false,message:'Non autorisé. Connectez-vous à nouveau'})
    }
    try {
        const  token_code = jwt.verify(token,process.env.JWT_SECRET )
        req.body.userId = token_code.id
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'Error'});
    }
}

export default authMiddleware