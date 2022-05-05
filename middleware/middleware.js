const {authMiddleware}=require('./authMiddleware')
const middleware=(req,res,next)=>{
    console.log("this is middle ware modified and structured")
    next()
}
exports.middleware=middleware
exports.authMiddleware=authMiddleware