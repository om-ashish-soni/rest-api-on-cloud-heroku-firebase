const {authMiddleware}=require('./authMiddleware')
const middleware=(req,res,next)=>{
    console.log(`${req.method} request to ${req.originalUrl}`)
    next()
}
exports.middleware=middleware
exports.authMiddleware=authMiddleware