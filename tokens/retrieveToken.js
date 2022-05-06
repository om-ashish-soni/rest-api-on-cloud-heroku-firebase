const mongoose = require('mongoose');
const {Token} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config');
const { add } = require('nodemon/lib/rules');

const retrieveToken=async (token)=>{
    connect(DATABASE);
    const _token=await Token.findOne({"token":token})
    if(_token){
        return true;
    }else{
        return false;
    }
}
exports.retrieveToken=retrieveToken