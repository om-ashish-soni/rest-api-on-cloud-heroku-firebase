const { deleteToken } = require("../tokens/deleteToken")

const authJWTLogout=async (req,res)=>{
    const token=req.body.token
    if(token==null){
        res.status(404)
        res.json({
            "message":"404, token not found "
        })
    }
    await deleteToken(req,res,token)
}
exports.authJWTLogout=authJWTLogout