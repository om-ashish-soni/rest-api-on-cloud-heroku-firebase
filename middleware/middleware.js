const {authMiddleware}=require('./authMiddleware')
const middleware=(req,res,next)=>{
    
    const date=new Date()
    console.log(`${req.method} request to ${req.originalUrl} on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`)
    console.log(`utc date & time : ${date.toUTCString()}`)
    next()
    
}
exports.middleware=middleware
exports.authMiddleware=authMiddleware