const jwt=require('jsonwebtoken')
const {generateAccessToken}=require('./generateAccessToken')
const {saveToken}=require('../tokens/saveToken')
const authJWTRoute=(req,res)=>{
    
    console.log('in auth jwt route')
    const user=req.body.user
    const accessToken=generateAccessToken(user)
    const refreshToken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    console.log("saveToken",saveToken)
    if(saveToken(refreshToken)){
        res.json({
            accessToken:accessToken,
            refreshToken:refreshToken
        })
    }else{
        res.status(500)
        res.json({
            "error":"Internal Server Error"
        })
    }
    
}
exports.route=authJWTRoute