const jwt=require('jsonwebtoken')
const authJWTRoute=(req,res)=>{
    console.log('in auth jwt route')
    const user=req.body.user
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({
        accessToken:accessToken
    })
}
exports.route=authJWTRoute