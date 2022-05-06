const {retrieveToken}=require('../tokens/retrieveToken')
const {generateAccessToken}=require('./generateAccessToken')
const refreshTokenRoute=async (req,res)=>{
    const refreshToken=req.body.token
    if(refreshToken==null){
        console.log("401 , unauthorized access , token not found")
        res.status(401)
        res.json({
            "message":"unauthorized, client lacks valid auth credentials"
        })
        return
    }
    console.log("refreshToken",refreshToken)
    
    const status=await retrieveToken(refreshToken)
    console.log("retriveStatus",status)
    if(status){
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,result)=>{
            if(err){
                res.status(403)
                res.json({
                    "message":"403 Forbidden not rematch"
                })
                return
            }else{
                const accessToken=generateAccessToken({
                    "username":"om"
                })
                res.json({
                    accessToken:accessToken
                })
            }
        })
        res.json({
            "message":"refresh token exists"
        })
        return
    }else{
        res.status(403)
        res.json({
            "message":"403 Forbidden status code re-authenticating makes no difference."
        })
        return
    }
    

}
exports.route=refreshTokenRoute