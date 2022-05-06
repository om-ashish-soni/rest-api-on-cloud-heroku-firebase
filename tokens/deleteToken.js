const mongoose = require('mongoose');
const {Token} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config');
const { add } = require('nodemon/lib/rules');
const res = require('express/lib/response');

const deleteToken=async (req,res,token)=>{
    connect(DATABASE);
    try{
        await Token.deleteMany({
            "token":token
        })
        console.log('token deleted from database successfully')
        res.sendStatus(204)
        return
    }catch(err){
        console.log('error while deleting token',err)
        res.status(500)
        res.json({
            "error":"could not delete token from database"
        })
        return
    }
    
}
exports.deleteToken=deleteToken