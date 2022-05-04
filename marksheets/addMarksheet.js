const mongoose = require('mongoose');
const {Marksheet} = require('../mongoCompass/models');
const {connect} = require('../mongoCompass/connect')
const {DATABASE} = require('../mongoCompass/config');
const { add } = require('nodemon/lib/rules');
const addStudentRoute=async (req,res)=>{
    connect(DATABASE); 
    const marksheet=new Marksheet(req.body);
    await marksheet.save().then(()=>{
        console.log("marksheet saved")
        res.json({"messgage":"marksheet saved"})
    })
}
exports.route=addStudentRoute;