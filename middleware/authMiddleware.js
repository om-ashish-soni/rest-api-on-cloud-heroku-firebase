const { Admin } = require('mongodb')
const {ADMIN_KEY}=require('../credentials/credentails')
const authMiddleware=(req,res,next)=>{
    const admin=req.body.admin
    if(admin && admin.key === ADMIN_KEY){
        return next()
    }
    res.json({
        "message":"access denied"
    })
}
exports.authMiddleware=authMiddleware