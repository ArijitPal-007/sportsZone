import jwt from "jsonwebtoken"

const authMiddleware = async(req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({msg:"not authorized"})
    }
    
    try {
        const tokenDecoded = jwt.verify(token,process.env.JWT_SECRET)
        req.body.user = tokenDecoded.authMiddleware
        next()
    } catch (error) {
        console.log("error in middleware",error);
        res.json({msg:"error in middleware"})
    }
}

export default authMiddleware