const mongoose = require('mongoose');
const {Token} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config');
const { add } = require('nodemon/lib/rules');

const saveToken=async (token)=>{
    connect(DATABASE);
    const token_to_save=new Token({
        "token":token
    })
    token_to_save.save((err,result)=>{
        if(err){
            console.log("can't save token")
            console.log("error ",err)
            return false
        }else{
            console.log("token saved",token_to_save)
            return true
        }
    })
    
}
exports.saveToken=saveToken;