const { Admin } = require('mongodb')
const {ADMIN_KEY}=require('../credentials/credentails')
const authMiddleware=(req,res,next)=>{
    const admin=req.body.admin
    if(admin && admin.key === ADMIN_KEY){
        req.admin=true
        console.log("before calling next() ...")
        next()
        console.log("after calling next() ...")
        return
    }else{
        res.status(403)
        res.json({
            "message":"access denied"
        })
    }
    
}
exports.authMiddleware=authMiddleware