const mongoose = require('mongoose');
const {Marksheet} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config');
const { add } = require('nodemon/lib/rules');
const addStudentRoute=async (req,res)=>{
    connect(DATABASE); 
    const marksheet=new Marksheet(req.body);
    await marksheet.save((err,result)=>{
        if(err){
            console.log("error occured");
            res.json({
                "message":"error while saving marksheet",
                "details":err
            })
        }else{
            console.log("saved marksheet successfully")
            res.json({
                "marksheet":marksheet
            })
        }
    })
    
}
exports.route=addStudentRoute;