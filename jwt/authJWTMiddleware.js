const jwt=require('jsonwebtoken')
const authJWTMiddleware=(req,res,next)=>{
    console.log("in authJWT-Middleware")
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]// Bearer TOKEN
    if(token==null){
        res.status(404)
        return res.json({
            "error":"404 not found"
        })
    }
    console.log("token",token)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,result)=>{
        if(err){
            res.status(403)
            return res.json({
                "error":"unauthorized access jwt token not found,get token again"
            })
        }
        // result = ....some operations
        next()
    })
    
}
exports.authJWTMiddleware=authJWTMiddleware